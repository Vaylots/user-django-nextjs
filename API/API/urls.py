"""API URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import USERS.views as USER_MODEl

urlpatterns = [
    path('admin/', admin.site.urls),
    path("users/", USER_MODEl.GetUsers),
    path("users/<int:id>", USER_MODEl.GetUserById),
    path("users/edit/<int:id>", USER_MODEl.EditUserById),
    path("users/delete/<int:id>", USER_MODEl.DeleteUserById),
    path("users/add/", USER_MODEl.AddNewUser),
]
