#routes/auth.py
from flask import Flask, request, session, make_response
from flask_restful import Resource
from config import db, bcrypt, api, app
from models.users import User
from sqlalchemy.exc import SQLAlchemyError

class Register(Resource):
    def post(self):
        params = request.json
        try:
            # Create the User
            user = User(username=params.get('username'), email=params.get('email'))
            user.password_hash = bcrypt.generate_password_hash(params.get('password')).decode('utf-8')
            db.session.add(user)
            db.session.commit()

            # Store the user ID in the session
            session['user_id'] = user.id
            return make_response(user.to_dict(), 201)

        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response({'error': str(e)}, 400)
        except Exception as e:
            db.session.rollback()
            return make_response({'error': 'Something went wrong'}, 400)

api.add_resource(Register, '/api/register')

class CheckSession(Resource):
    def get(self):
        user_id = session.get('user_id')
        if user_id:
            # user = db.session.get(User, user_id)
            user = User.query.get(user_id)
            if user:
                return make_response(user.to_dict(), 200)
        return make_response({'error': 'Unauthorized: Must login'}, 401)

api.add_resource(CheckSession, '/check_session')

class Logout(Resource):
    def delete(self):
        session.pop('user_id', None)
        return make_response({}, 204)

api.add_resource(Logout, '/logout')

class Login(Resource):
    def post(self):
        params = request.json
        user = User.query.filter_by(username=params.get('username')).first()
        
        if not user:
            return make_response({'error': 'user not found'}, 404)

        if user.authenticate(params.get('password')):
            session['user_id'] = user.id
            return make_response(user.to_dict(), 200)
        else:
            return make_response({'error': 'invalid password'}, 401)

api.add_resource(Login, '/api/login')