# Generated by Django 4.1.2 on 2022-10-08 14:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('USERS', '0006_alter_user_controller_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user_controller',
            name='image',
        ),
    ]
