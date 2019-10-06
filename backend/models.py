from django.db import models


class Champion(models.Model):
    name = models.CharField(max_length=500)
    imagefile = models.FileField(upload_to='images/', null=True, verbose_name="")

    def __str__(self):
        return self.name + ": " + str(self.imagefile)

class Item(models.Model):
    name = models.CharField(max_length=500)
    imagefile = models.FileField(upload_to='images/', null=True, verbose_name="")

    def __str__(self):
        return self.name + ": " + str(self.imagefile)

