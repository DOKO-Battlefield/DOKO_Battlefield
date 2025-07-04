"""Initial migration

Revision ID: a9e4b9e3de18
Revises: 
Create Date: 2025-03-21 16:31:15.979816

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a9e4b9e3de18'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('menu_items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('restaurant_name', sa.String(length=100), nullable=False),
    sa.Column('item_name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('price', sa.Float(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('rooms',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('sport_name', sa.String(length=100), nullable=False),
    sa.Column('location', sa.String(length=200), nullable=False),
    sa.Column('room_name', sa.String(length=100), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=80), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('_password_hash', sa.String(length=128), nullable=False),
    sa.Column('image', sa.String(length=500), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('first_name', sa.String(length=500), nullable=True),
    sa.Column('last_name', sa.String(length=500), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('folders',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('room_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('timestamp', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['room_id'], ['rooms.id'], name=op.f('fk_folders_room_id_rooms')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_folders_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('qrcodes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('room_id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['room_id'], ['rooms.id'], name=op.f('fk_qrcodes_room_id_rooms')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_qrcodes_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('content', sa.Text(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_reviews_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_rooms',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('room_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['room_id'], ['rooms.id'], name=op.f('fk_user_rooms_room_id_rooms')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_user_rooms_user_id_users')),
    sa.PrimaryKeyConstraint('user_id', 'room_id')
    )
    op.create_table('waiting_list',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('room_id', sa.Integer(), nullable=False),
    sa.Column('position', sa.Integer(), nullable=False),
    sa.Column('notified_at', sa.DateTime(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['room_id'], ['rooms.id'], name=op.f('fk_waiting_list_room_id_rooms')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_waiting_list_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('medias',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('media_type', sa.String(length=200), nullable=False),
    sa.Column('media_url', sa.String(length=200), nullable=False),
    sa.Column('room_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('folder_id', sa.Integer(), nullable=True),
    sa.Column('timestamp', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['folder_id'], ['folders.id'], name=op.f('fk_medias_folder_id_folders')),
    sa.ForeignKeyConstraint(['room_id'], ['rooms.id'], name=op.f('fk_medias_room_id_rooms')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_medias_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('medias')
    op.drop_table('waiting_list')
    op.drop_table('user_rooms')
    op.drop_table('reviews')
    op.drop_table('qrcodes')
    op.drop_table('folders')
    op.drop_table('users')
    op.drop_table('rooms')
    op.drop_table('menu_items')
    # ### end Alembic commands ###
