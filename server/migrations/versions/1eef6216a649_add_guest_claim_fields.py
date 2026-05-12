"""add guest claim fields

Revision ID: 1eef6216a649
Revises: c0201161ac9a
Create Date: 2025-12-16 11:19:54.407091
"""

from alembic import op
import sqlalchemy as sa


revision = "1eef6216a649"
down_revision = "c0201161ac9a"
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table("events", schema=None) as batch_op:
        batch_op.add_column(
            sa.Column(
                "starts_at",
                sa.DateTime(),
                nullable=True,
                server_default=sa.text("(CURRENT_TIMESTAMP)"),
            )
        )
        batch_op.add_column(
            sa.Column(
                "ends_at",
                sa.DateTime(),
                nullable=True,
            )
        )
        batch_op.add_column(
            sa.Column(
                "status",
                sa.String(length=32),
                nullable=True,
                server_default="upcoming",
            )
        )
        batch_op.alter_column(
            "description",
            existing_type=sa.TEXT(),
            nullable=True,
        )
        batch_op.alter_column(
            "is_public",
            existing_type=sa.BOOLEAN(),
            nullable=True,
        )
        batch_op.drop_column("date")

    with op.batch_alter_table("faqs", schema=None) as batch_op:
        batch_op.add_column(
            sa.Column(
                "order",
                sa.Integer(),
                nullable=True,
                server_default="0",
            )
        )
        batch_op.add_column(
            sa.Column(
                "active",
                sa.Boolean(),
                nullable=True,
                server_default=sa.text("(true)"),
            )
        )
        batch_op.alter_column(
            "category",
            existing_type=sa.VARCHAR(length=255),
            type_=sa.String(length=64),
            nullable=True,
        )
        batch_op.drop_column("title")

    with op.batch_alter_table("medias", schema=None) as batch_op:
        batch_op.add_column(
            sa.Column(
                "type",
                sa.String(length=200),
                nullable=True,
                server_default="image",
            )
        )
        batch_op.add_column(
            sa.Column(
                "url",
                sa.String(length=500),
                nullable=True,
                server_default="",
            )
        )
        batch_op.add_column(
            sa.Column(
                "is_public",
                sa.Boolean(),
                nullable=True,
                server_default=sa.text("(false)"),
            )
        )
        batch_op.add_column(
            sa.Column(
                "approved",
                sa.Boolean(),
                nullable=True,
                server_default=sa.text("(false)"),
            )
        )
        batch_op.add_column(
            sa.Column("checksum", sa.String(length=64), nullable=True)
        )
        batch_op.drop_column("media_type")
        batch_op.drop_column("media_url")

    with op.batch_alter_table("users", schema=None) as batch_op:
        batch_op.add_column(
            sa.Column(
                "is_guest",
                sa.Boolean(),
                nullable=True,
                server_default=sa.text("(true)"),
            )
        )
        batch_op.add_column(sa.Column("claimed_at", sa.DateTime(), nullable=True))
        batch_op.add_column(
            sa.Column(
                "email_verified",
                sa.Boolean(),
                nullable=True,
                server_default=sa.text("(false)"),
            )
        )
        batch_op.add_column(sa.Column("phone", sa.String(length=50), nullable=True))
        batch_op.add_column(sa.Column("group_name", sa.String(length=120), nullable=True))

        batch_op.alter_column(
            "first_name",
            existing_type=sa.VARCHAR(length=500),
            type_=sa.String(length=120),
            existing_nullable=True,
        )
        batch_op.alter_column(
            "last_name",
            existing_type=sa.VARCHAR(length=500),
            type_=sa.String(length=120),
            existing_nullable=True,
        )


def downgrade():
    with op.batch_alter_table("users", schema=None) as batch_op:
        batch_op.alter_column(
            "last_name",
            existing_type=sa.String(length=120),
            type_=sa.VARCHAR(length=500),
            existing_nullable=True,
        )
        batch_op.alter_column(
            "first_name",
            existing_type=sa.String(length=120),
            type_=sa.VARCHAR(length=500),
            existing_nullable=True,
        )
        batch_op.drop_column("group_name")
        batch_op.drop_column("phone")
        batch_op.drop_column("email_verified")
        batch_op.drop_column("claimed_at")
        batch_op.drop_column("is_guest")

    with op.batch_alter_table("medias", schema=None) as batch_op:
        batch_op.add_column(sa.Column("media_url", sa.VARCHAR(length=200), nullable=True))
        batch_op.add_column(sa.Column("media_type", sa.VARCHAR(length=200), nullable=True))
        batch_op.drop_column("checksum")
        batch_op.drop_column("approved")
        batch_op.drop_column("is_public")
        batch_op.drop_column("url")
        batch_op.drop_column("type")

    with op.batch_alter_table("faqs", schema=None) as batch_op:
        batch_op.add_column(sa.Column("title", sa.VARCHAR(length=255), nullable=True))
        batch_op.alter_column(
            "category",
            existing_type=sa.String(length=64),
            type_=sa.VARCHAR(length=255),
            nullable=True,
        )
        batch_op.drop_column("active")
        batch_op.drop_column("order")

    with op.batch_alter_table("events", schema=None) as batch_op:
        batch_op.add_column(sa.Column("date", sa.DATETIME(), nullable=True))
        batch_op.alter_column(
            "is_public",
            existing_type=sa.BOOLEAN(),
            nullable=True,
        )
        batch_op.alter_column(
            "description",
            existing_type=sa.TEXT(),
            nullable=True,
        )
        batch_op.drop_column("status")
        batch_op.drop_column("ends_at")
        batch_op.drop_column("starts_at")
