from django.core.management.base import BaseCommand
from tftcalc.models import Champion, Item
import json


class Command(BaseCommand):
    help = 'our help string comes here'

    def _create_tags(self):
        with open('champions.json') as f:
            d = json.load(f)
            for entry in d:
                new_champ = Champion(name=entry, data=d[entry])
                new_champ.save()

        with open('items.json') as f:
            d = json.load(f)
            for entry in d:
                new_item = Item(name=entry, data=d[entry])
                new_item.save()

    def handle(self, *args, **options):
        self._create_tags()
