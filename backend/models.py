from django.db import models
from django_mysql.models import JSONField


class Champion(models.Model):
    name = models.CharField(max_length=500)
    data = JSONField()

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'champions'


class Item(models.Model):
    name = models.CharField(max_length=500)
    data = JSONField()

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'items'
