from rest_framework import serializers
from .models import Champion, Item, Class, Origin


class ChampionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Champion
        fields = ('name', 'data')


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('name', 'data')


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ('name', 'data')


class OriginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Origin
        fields = ('name', 'data')
