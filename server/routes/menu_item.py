from flask import request, make_response
from flask_restful import Resource
from config import db, api
from models.menu_item import MenuItem
from sqlalchemy.exc import SQLAlchemyError


class MenuItemList(Resource):
    def get(self):
        items = MenuItem.query.all()
        item_data = [
            {
                "id": item.id,
                "restaurant_name": item.restaurant_name,
                "item_name": item.item_name,
                "description": item.description,
                "price": item.price
            }
            for item in items
        ]
        return make_response(item_data, 200)

    def post(self):
        data = request.json
        try:
            new_item = MenuItem(
                restaurant_name=data.get("restaurant_name"),
                item_name=data.get("item_name"),
                description=data.get("description"),
                price=data.get("price")
            )
            db.session.add(new_item)
            db.session.commit()

            return make_response({"message": "Menu item added."}, 201)
        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)


class MenuItemById(Resource):
    def get(self, item_id):
        item = MenuItem.query.get(item_id)
        if item:
            return make_response({
                "id": item.id,
                "restaurant_name": item.restaurant_name,
                "item_name": item.item_name,
                "description": item.description,
                "price": item.price
            }, 200)
        return make_response({"message": "Item not found."}, 404)

    def delete(self, item_id):
        item = MenuItem.query.get(item_id)
        if item:
            db.session.delete(item)
            db.session.commit()
            return make_response({"message": "Item deleted."}, 200)
        return make_response({"message": "Item not found."}, 404)


# Register routes
api.add_resource(MenuItemList, "/menu")
api.add_resource(MenuItemById, "/menu/<int:item_id>")
