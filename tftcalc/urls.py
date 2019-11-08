from django.urls import path

from .views import *

urlpatterns = [
    path('', index, name='index'),
    # path('champions', ChampionViewSet.as_view(), name='champions'),
    # path('items', ItemViewSet.as_view(), name='items'),
]
