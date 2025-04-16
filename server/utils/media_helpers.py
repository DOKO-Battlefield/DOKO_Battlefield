from models.folder import Folder
from models.media import Media
from config import db

def create_folder_and_media_for_user_and_room(user_id, room_id, media_data):
    folder = Folder(user_id=user_id, room_id=room_id)
    db.session.add(folder)
    db.session.flush()  # Get folder.id before committing

    media_items = []
    for media in media_data:
        m = Media(
            media_type=media['media_type'],
            media_url=media['media_url'],
            user_id=user_id,
            room_id=room_id,
            folder_id=folder.id
        )
        db.session.add(m)
        media_items.append(m)

    db.session.commit()
    return folder, media_items
