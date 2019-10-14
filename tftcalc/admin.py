
from django.contrib import admin
from .models import Champion, Item


class ChampAdmin(admin.ModelAdmin):
    list_display = ('name', 'data')


class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'data')


admin.site.register(Champion, ChampAdmin)
admin.site.register(Item, ItemAdmin)
