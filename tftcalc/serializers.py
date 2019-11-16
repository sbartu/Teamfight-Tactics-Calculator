from rest_framework import serializers
from .models import Champion, Item, Hex, Trait


class ChampionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Champion
        fields = ('name', 'cost', 'traits')


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id_num', 'name')


class HexSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hex
        fields = ('name', 'description')


class TraitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trait
        fields = ('name', 'innate', 'description', 'sets')
