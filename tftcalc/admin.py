
from django.contrib import admin
from .models import Champion, Item, Hex, Trait


class ChampionAdmin(admin.ModelAdmin):
    list_display = ('name', 'cost', 'traits')


class ItemAdmin(admin.ModelAdmin):
    list_display = ('id_num', 'name')


class HexAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')


class TraitAdmin(admin.ModelAdmin):
    list_display = ('name', 'innate', 'description', 'sets')


admin.site.register(Champion, ChampionAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(Hex, HexAdmin)
admin.site.register(Trait, TraitAdmin)
