# Generated by Django 4.1.2 on 2022-10-08 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('USERS', '0008_user_controller_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_controller',
            name='image',
            field=models.ImageField(default='images/notFound.png', null=True, upload_to='images/'),
        ),
    ]
