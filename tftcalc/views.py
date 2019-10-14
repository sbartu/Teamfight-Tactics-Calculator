from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache


from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ChampionSerializer, ItemSerializer
from .models import Champion, Item

index = never_cache(TemplateView.as_view(template_name='index.html'))


class ChampionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Champion.objects.all()
    serializer_class = ChampionSerializer


class ItemViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
