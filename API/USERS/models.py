from django.db import models
# Create your models here.


class USER_CONTROLLER(models.Model):
    username = models.CharField(max_length=50, unique=True)
    age = models.IntegerField()
    birthday = models.DateField()
    image = models.ImageField(
        upload_to="images/", default="images/notFoundImage.png")
    GENDER_CHOICE = (("M", "Male"), ("F", "Female"))
    gender = models.CharField(
        max_length=50, choices=GENDER_CHOICE, default="M")

    def __str__(self) -> str:
        return self.username
