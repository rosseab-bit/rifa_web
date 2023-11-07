from django.shortcuts import render
from django.http import HttpResponse
import json
from django.http import JsonResponse
import requests
from django.views.decorators.csrf import csrf_exempt
from .models import Rifa, ConfigRifa

# Create your views here.

def getData(requests):
    if requests.method == "GET":
        dataSqlite = Rifa.objects.all().values()
        dataJson = {'data': list(dataSqlite)}
        return JsonResponse(dataJson)


def getConfig(requests):
    if requests.method == "GET":
        dataSqlite = ConfigRifa.objects.all().values()
        dataJson = {'data': list(dataSqlite)}
        print(dataJson)
        return JsonResponse(dataJson)



@csrf_exempt
def putData(requests):
    if requests.method == "POST":
        number_update = json.loads(requests.body)['number_selected']
        print(number_update)
        Rifa.objects.filter(number=number_update).update(status='pending')
        return JsonResponse({"data": "success"})


def updateData(requests):
    if requests.method == "UPDATE":
        print(json.loads(requests.body)["data"])


