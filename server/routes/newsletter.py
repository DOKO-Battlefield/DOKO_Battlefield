from flask import request, make_response
from flask_restful import Resource
from config import db, api
from models.newsletter import NewsletterSubscriber
from sqlalchemy.exc import IntegrityError

class NewsletterSignup(Resource):
    def post(self):
        data = request.get_json()
        email = data.get('email')

        if not email:
            return make_response({"error": "Email is required."}, 400)

        new_subscriber = NewsletterSubscriber(email=email)

        try:
            db.session.add(new_subscriber)
            db.session.commit()
            return make_response({"message": "Thank you for signing up!"}, 201)

        except IntegrityError:
            db.session.rollback()
            return make_response({"message": "You're already subscribed!"}, 200)

        except Exception as e:
            return make_response({"error": f"Something went wrong: {str(e)}"}, 500)

# Register route
api.add_resource(NewsletterSignup, '/api/newsletter')
