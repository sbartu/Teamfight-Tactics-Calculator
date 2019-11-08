
from django.contrib import admin
from .models import Champion, Item, Class, Origin


class ChampAdmin(admin.ModelAdmin):
    list_display = ('name', 'data')


class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'data')


class ClassAdmin(admin.ModelAdmin):
    list_display = ('name', 'data')


class OriginAdmin(admin.ModelAdmin):
    list_display = ('name', 'data')


admin.site.register(Champion, ChampAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(Class, ClassAdmin)
admin.site.register(Origin, OriginAdmin)
