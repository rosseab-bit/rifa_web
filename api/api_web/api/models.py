from pyexpat import model
from unittest.util import _MAX_LENGTH

from django.db import models

# Create your models here.

class Rifa(models.Model):
    number = models.IntegerField()
    status = models.CharField(max_length=150)
