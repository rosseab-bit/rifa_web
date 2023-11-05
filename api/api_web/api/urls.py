from django.urls import path
from . import views


urlpatterns = [
        path("getdata", views.getData, name="getdata"),
        path("putdata", views.putData, name="putdata"),
        path("updatedata", views.updateData, name="updatedata"),
        ]
