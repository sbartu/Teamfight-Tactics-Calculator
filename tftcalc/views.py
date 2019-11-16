from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache


from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ChampionSerializer, ItemSerializer, HexSerializer, TraitSerializer
from .models import Champion, Item, Hex, Trait

index = never_cache(TemplateView.as_view(template_name='index.html'))


class ChampionViewSet(viewsets.ModelViewSet):
    queryset = Champion.objects.all()
    serializer_class = ChampionSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class HexViewSet(viewsets.ModelViewSet):
    queryset = Hex.objects.all()
    serializer_class = HexSerializer


class TraitViewSet(viewsets.ModelViewSet):
    queryset = Trait.objects.all()
    serializer_class = TraitSerializer
