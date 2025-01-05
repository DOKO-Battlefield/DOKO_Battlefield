#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from datetime import datetime

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


# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5566, debug=True)

