from flask import request, make_response
from flask_restful import Resource
from config import db, api
from models.faq import FAQ
from sqlalchemy.exc import SQLAlchemyError


class FAQList(Resource):
    def get(self):
        faqs = FAQ.query.order_by(FAQ.id.asc()).all()
        faq_data = [
            {
                "id": f.id,
                "question": f.question,
                "answer": f.answer
            } for f in faqs
        ]
        return make_response(faq_data, 200)

    def post(self):
        data = request.json
        try:
            new_faq = FAQ(
                question=data.get("question"),
                answer=data.get("answer")
            )
            db.session.add(new_faq)
            db.session.commit()
            return make_response({"message": "FAQ created."}, 201)
        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)


class FAQById(Resource):
    def get(self, faq_id):
        faq = FAQ.query.get(faq_id)
        if faq:
            return make_response({
                "id": faq.id,
                "question": faq.question,
                "answer": faq.answer
            }, 200)
        return make_response({"message": "FAQ not found."}, 404)

    def delete(self, faq_id):
        faq = FAQ.query.get(faq_id)
        if faq:
            db.session.delete(faq)
            db.session.commit()
            return make_response({"message": "FAQ deleted."}, 200)
        return make_response({"message": "FAQ not found."}, 404)


# Register routes
api.add_resource(FAQList, "/faqs")
api.add_resource(FAQById, "/faqs/<int:faq_id>")
