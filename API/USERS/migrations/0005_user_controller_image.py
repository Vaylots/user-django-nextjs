# Generated by Django 2.1.5 on 2022-10-08 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('USERS', '0004_auto_20221008_1359'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_controller',
            name='image',
            field=models.ImageField(null=True, upload_to='images'),
        ),
    ]
