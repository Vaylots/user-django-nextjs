from django.http import JsonResponse, HttpResponse
from .models import USER_CONTROLLER
import json

# Create your views here.


def GetUsers(request):
    users = list(USER_CONTROLLER.objects.values())
    return JsonResponse(users, safe=False)


def GetUserById(request, id):
    user = list(USER_CONTROLLER.objects.filter(id=id).values())
    return JsonResponse(user, safe=False)


def AddNewUser(request):
    try:
        json_data = json.loads(request.body)

        username = json_data["newUsername"]
        age = int(json_data["newAge"])
        gender = json_data["newGender"]
        birthday = json_data["newBirthday"]
        user = USER_CONTROLLER(
            username=username,
            age=age,
            gender=gender,
            birthday=birthday
        )

        user.save()

        return JsonResponse({"message": f"user <{username}> has been added"})
    except Exception as error:
        print(error)
        return JsonResponse({"message": "something wrong, check backend terminal 😔"})


def EditUserById(request, id):
    user = USER_CONTROLLER.objects.get(id=id)
    json_data = json.loads(request.body)

    user.username = json_data["newUsername"]
    user.age = int(json_data["newAge"])
    user.gender = json_data["newGender"]
    user.birthday = json_data["newBirthday"]
    user.save()
    print(json_data)
    return JsonResponse(json_data, safe=False)


def DeleteUserById(request, id):
    try:
        user = USER_CONTROLLER.objects.get(id=id)
        user.delete()
        return JsonResponse({"message": f"User <{user.username}>  has been deleted"})
    except Exception as error:
        print(error)
        return JsonResponse({"message": "something wrong, check backend terminal 😔"})
