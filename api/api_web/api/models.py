from pyexpat import model
from unittest.util import _MAX_LENGTH

from django.db import models

# Create your models here.

class Rifa(models.Model):
    number = models.IntegerField()
    status = models.CharField(max_length=150)

class ConfigRifa(models.Model):
    # ingresar los valores separados por coma
    awards = models.CharField(max_length=150)
    # precio de la rifa
    price = models.FloatField()
    # de que se trata la rifa
    abaout = models.CharField(max_length=150)
    # ingresar ofertas separadas por coma
    offers = models.CharField(max_length=150)
    class Meta:
        db_table = "ConfigRifa"
