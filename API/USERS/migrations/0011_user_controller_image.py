# Generated by Django 4.1.2 on 2022-10-08 20:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('USERS', '0010_remove_user_controller_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_controller',
            name='image',
            field=models.ImageField(default='images/notFound.png', upload_to='images/'),
        ),
    ]
