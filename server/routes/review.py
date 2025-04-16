from flask import request, make_response
from flask_restful import Resource
from config import db, api
from models.review import Review
from sqlalchemy.exc import SQLAlchemyError


class ReviewList(Resource):
    def get(self):
        reviews = Review.query.all()
        review_data = [
            {
                "id": r.id,
                "user_id": r.user_id,
                "rating": r.rating,
                "content": r.content,
                "created_at": r.created_at
            } for r in reviews
        ]
        return make_response(review_data, 200)

    def post(self):
        data = request.json
        try:
            new_review = Review(
                user_id=data.get("user_id"),
                rating=data.get("rating"),
                content=data.get("content")
            )
            db.session.add(new_review)
            db.session.commit()
            return make_response({"message": "Review created."}, 201)
        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)


class ReviewById(Resource):
    def get(self, review_id):
        review = Review.query.get(review_id)
        if review:
            return make_response({
                "id": review.id,
                "user_id": review.user_id,
                "rating": review.rating,
                "content": review.content,
                "created_at": review.created_at
            }, 200)
        return make_response({"message": "Review not found."}, 404)

    def delete(self, review_id):
        review = Review.query.get(review_id)
        if review:
            db.session.delete(review)
            db.session.commit()
            return make_response({"message": "Review deleted."}, 200)
        return make_response({"message": "Review not found."}, 404)

# Register routes
api.add_resource(ReviewList, "/reviews")
api.add_resource(ReviewById, "/reviews/<int:review_id>")
