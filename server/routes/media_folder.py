#routes/media_folder.py
from flask import request, make_response
from flask_restful import Resource
from config import db, api, app
from models.media import Media
from models.folder import Folder
from sqlalchemy.exc import SQLAlchemyError
from models.qr_code import QRCode
from utils.media_helpers import create_folder_and_media_for_user_and_room



class UploadMedia(Resource):
    def post(self):
        data = request.get_json()
        user_id = data.get('user_id')
        room_id = data.get('room_id')
        media_data = data.get('media_data')  # A list of media items

        try:
            qr_code = data.get('qr_code')

            if qr_code:
                from models.qr_code import QRCode
                qr = QRCode.query.filter_by(code=qr_code).first()
                if not qr:
                    return make_response({'error': 'Invalid QR code'}, 404)
                user_id = qr.user_id
                room_id = room_id or qr.room_id  # allow override or fallback

            folder, media_items = create_folder_and_media_for_user_and_room(user_id, room_id, media_data)
            return make_response({
                'folder_id': folder.id,
                'media': [m.to_dict() for m in media_items]
            }, 201)
        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response({'error': str(e)}, 400)
        except Exception as e:
            db.session.rollback()
            return make_response({'error': 'Something went wrong'}, 400)

api.add_resource(UploadMedia, '/media')

class FetchFolderMedia(Resource):
    def get(self, folder_id):
        try:
            folder = Folder.query.get_or_404(folder_id)
            return make_response({
                'media': [m.to_dict() for m in folder.medias]
            }, 200)
        except SQLAlchemyError as e:
            return make_response({'error': str(e)}, 400)

api.add_resource(FetchFolderMedia, '/folders/<int:folder_id>/media')

class FetchMediaByQRCode(Resource):
    def get(self, qr_code):
        try:
            qr = QRCode.query.filter_by(code=qr_code).first()
            if not qr:
                return make_response({'error': 'QR code not found'}, 404)

            media_items = Media.query.filter_by(user_id=qr.user_id).all()

            if not media_items:
                return make_response({'error': 'No media found for this user'}, 404)

            return make_response([m.to_dict() for m in media_items], 200)
        except SQLAlchemyError as e:
            return make_response({'error': str(e)}, 400)

api.add_resource(FetchMediaByQRCode, '/media/qr/<string:qr_code>')

class SoftDeleteMedia(Resource):
    def patch(self, media_id):
        try:
            media = Media.query.get_or_404(media_id)
            media.is_deleted = True
            db.session.commit()
            return make_response({'message': 'Media soft-deleted'}, 200)
        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response({'error': str(e)}, 400)

api.add_resource(SoftDeleteMedia, '/media/<int:media_id>/delete')

class DownloadMedia(Resource):
    def get(self, media_id):
        try:
            media = Media.query.get_or_404(media_id)
            return make_response({'media_url': media.media_url}, 200)
        except SQLAlchemyError as e:
            return make_response({'error': str(e)}, 400)

api.add_resource(DownloadMedia, '/media/<int:media_id>/download')