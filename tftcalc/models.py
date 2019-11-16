from django.db import models

# Create your models here.
from django.db import models
from django_mysql.models import ListCharField


class Champion(models.Model):
    name = models.CharField(max_length=50)
    cost = models.IntegerField()
    traits = ListCharField(base_field=models.CharField(max_length=30))

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'champions'


class Item(models.Model):
    id_num = models.IntegerField()
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'items'


class Hex(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'hexes'


class Trait(models.Model):
    name = models.CharField(max_length=50)
    innate = models.CharField(max_length=500)
    description = models.CharField(max_length=500)
    sets = ListCharField(base_field=models.IntegerField())

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'traits'
