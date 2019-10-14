from rest_framework import serializers
from .models import Champion, Item


class ChampionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Champion
        fields = ('name', 'data')


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('name', 'data')
