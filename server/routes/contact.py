# routes/contact.py
from flask import request, make_response
from flask_restful import Resource
from config import db, api, mail, Message, app
from models.contact import ContactSubmission
from sqlalchemy.exc import SQLAlchemyError


class ContactMessage(Resource):
    def post(self):
        data = request.get_json()
        print("📩 Incoming Contact Form:", data)

        try:
            # Save to database
            submission = ContactSubmission(
                name=data.get('name'),
                email=data.get('email'),
                organization=data.get('organization'),
                message=data.get('message')
            )
            db.session.add(submission)
            db.session.commit()

            subject = data.get('subject') or f"Partner Inquiry from {data.get('name')}"

            # Send email notification
            msg = Message(
                subject=subject,
                sender=app.config['MAIL_DEFAULT_SENDER'], 
                recipients=["treneese.johnson@dokobattlefield.com"],  
                body=f"""
                Name: {data.get('name')}
                Email: {data.get('email')}
                Organization: {data.get('organization') or 'N/A'}
                Message:
                {data.get('message')}
                """
            )
            mail.send(msg)
            print("✅ Email sent.")

            return make_response({"message": "Submission saved and email sent!"}, 200)

        except SQLAlchemyError as e:
            db.session.rollback()
            print("❌ DB ERROR:", str(e))
            return make_response({'error': f"Database error: {str(e)}"}, 500)

        except Exception as e:
            print("❌ EMAIL ERROR:", str(e))
            return make_response({'error': f"Email failed: {str(e)}"}, 500)


# Register route
api.add_resource(ContactMessage, '/api/contact')


class ContactList(Resource):
    def get(self):
        try:
            submissions = ContactSubmission.query.order_by(ContactSubmission.timestamp.desc()).all()
            return make_response(
                [submission.to_dict() for submission in submissions],
                200
            )
        except SQLAlchemyError as e:
            return make_response({'error': str(e)}, 500)
        
        api.add_resource(ContactList, '/admin/contact-submissions')
