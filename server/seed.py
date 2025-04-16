#!/usr/bin/env python3
from app import app, db

from models.users import User
from models.room import Room
from models.review import Review
from models.faq import FAQ
from models.event import Event
from models.menu_item import MenuItem
from models.folder import Folder
from models.media import Media
from models.qr_code import QRCode
from models.waiting_list import WaitingList

from werkzeug.security import generate_password_hash
from datetime import datetime

with app.app_context():
    print("🌱 Seeding database...")

    # Clear existing data (optional)
    db.session.query(Review).delete()
    db.session.query(FAQ).delete()
    db.session.query(Event).delete()
    db.session.query(MenuItem).delete()
    db.session.query(Room).delete()
    db.session.query(User).delete()
    db.session.commit()

    # Create users
    user1 = User(
        username="warrior_queen",
        email="queen@doko.com",
        _password_hash=generate_password_hash("password123"),
        first_name="Ala",
        last_name="Chuke"
    )

    user2 = User(
        username="shadow_blade",
        email="blade@doko.com",
        _password_hash=generate_password_hash("blade456"),
        first_name="Shango",
        last_name="Chuke"
    )

    # Create rooms
    room1 = Room(sport_name="Fencing", location="Arena A", room_name="Room 1")
    room2 = Room(sport_name="Archery", location="Arena B", room_name="Room 2")

    # Create reviews
    review1 = Review(user_id=1, rating=5, content="Best experience EVER! Highly recommend!")
    review2 = Review(user_id=2, rating=4, content="Fun night, will come back for the night battles.")

    # Create FAQs
    faq1 = FAQ(question="Do I need to bring equipment?", answer="Nope! Everything is provided.")
    faq2 = FAQ(question="Are there age restrictions?", answer="You must be 12+ or supervised by an adult.")

    folder1 = Folder(user_id=1, room_id=1)
    folder2 = Folder(user_id=2, room_id=2)

    # Create events
    event1 = Event(
        title="Glow Dagger Night",
        description="Battle in the dark with glowing daggers and live music.",
        date=datetime(2025, 5, 18, 20, 0),
        location="Main Arena"
    )

    media1 = Media(
        media_type="photo",
        media_url="https://example.com/photo1.jpg",
        user_id=1,
        room_id=1,
        folder_id=1
    )

    media2 = Media(
        media_type="video",
        media_url="https://example.com/video2.mp4",
        user_id=2,
        room_id=2,
        folder_id=2
    )

    qr1 = QRCode(code="DOKO123-ALA", user_id=1, room_id=1)
    qr2 = QRCode(code="DOKO456-SHANGO", user_id=2, room_id=2)

    # Create menu items
    item1 = MenuItem(
        restaurant_name="Old Schools",
        item_name="Battle Burger",
        description="Juicy burger with crispy turf fries.",
        price=12.99
    )

    wl1 = WaitingList(user_id=1, room_id=1, position=1)
    wl2 = WaitingList(user_id=2, room_id=2, position=2)


    item2 = MenuItem(
        restaurant_name="Warrior Bar",
        item_name="Victory Juice",
        description="House mocktail with a citrus kick.",
        price=6.50
    )

    # Add all to session
    db.session.add_all([
    user1, user2,
    room1, room2,
    folder1, folder2,
    media1, media2,
    qr1, qr2,
    wl1, wl2,
    review1, review2,
    faq1, faq2,
    event1,
    item1, item2
])

    db.session.commit()

    print("✅ Seeding complete!")

