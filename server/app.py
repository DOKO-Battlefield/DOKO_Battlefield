#app.py
#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource
from apscheduler.schedulers.background import BackgroundScheduler
from flask_apscheduler import APScheduler
from datetime import datetime, timedelta
# Local imports
from config import app, db, api, Flask
# Add your model imports
from datetime import datetime
from models.waiting_list import WaitingList  
from utils.notifications import notify_users 
from utils.hardware_api import trigger_necklace
from routes.room import Room, CreateRoom, FetchRoomDetails
from routes.auth import User, Register, Login, Logout, CheckSession
from routes.media_folder import Media, Folder, SoftDeleteMedia, UploadMedia, DownloadMedia, FetchFolderMedia
from routes.qr_code_for_waitinglist import QRCode, WaitingList, JoinWaitingList, WaitingListStatus
from routes.qrcode_room import Room, ScanQRCode, FetchRoomMedia, QRCode
from routes.menu_item import MenuItemList, MenuItemById, MenuItem
from routes.review import ReviewList, ReviewById, Review
from routes.event import EventList, EventById, Event
from routes.faq import FAQList, FAQById, FAQ
from routes.contact import ContactMessage, ContactSubmission, ContactList
from routes.newsletter import NewsletterSignup
from routes.claim import ClaimAccount
from routes.kiosk import KioskCheckin
from routes.session import Session
from routes.event_data import EventCheckinData, SportPlayLogData, EventSummaryData
from routes.sport_play_log import SportPlayLogResource
from models.event_checkin import EventCheckin



api.add_resource(KioskCheckin, "/kiosk/checkin")
def create_folder_and_media_for_user_and_room(user_id, room_id, media_data_list):
    # Step 1: Create a Folder for the user and room
    folder = Folder(user_id=user_id, room_id=room_id, timestamp=datetime.utcnow())
    db.session.add(folder)
    db.session.commit()  # Commit to save the folder

    # Step 2: Create Media associated with the Folder
    for media_data in media_data_list:
        # Create each media item (photo/video)
        media = Media(
            user_id=user_id,
            room_id=room_id,
            folder_id=folder.id,
            media_type=media_data['media_type'],  # e.g., 'photo', 'video'
            media_url=media_data['media_url'],    # URL or path to the media file
            timestamp=datetime.utcnow()            # Capture time of media
        )
        db.session.add(media)

    db.session.commit()  # Commit all media to the database

    return folder, media_data_list  # Optionally return the created data for verification

scheduler = APScheduler()

def wrapped_notify_users():
    with app.app_context():
        notify_users()

scheduler.add_job(
    id='notify_users',
    func=wrapped_notify_users,
    trigger='interval',
    seconds=60
)

scheduler.init_app(app)
scheduler.start()

def send_post_event_surveys():
    with app.app_context():

        attendees = EventCheckin.query.filter_by(
            survey_sent_at=False
        ).all()

        for attendee in attendees:

            survey_link = "https://tally.so/r/javA16"

            print(f"Sending survey to {attendee.email}")

            # email logic goes here

            attendee.survey_sent = True

        db.session.commit()


scheduler.add_job(
    id="send_surveys",
    func=send_post_event_surveys,
    trigger="date",
    run_date=datetime(2026, 7, 19, 14, 0)
)

print("🔥 APP STARTED - NEW DEPLOYMENT LOADED 🔥")
# Views go here!

@app.route('/')
def index():
    return '<h1>DOKO Battlefield Backend</h1>'


if __name__ == '__main__':
    app.run(port=5000, debug=True)

