from django.core.management.base import BaseCommand
from tftcalc.models import Champion, Item, Hex, Trait
import json


class Command(BaseCommand):
    help = 'Load the initial data from the provided *.json to the database.'

    def _create_tags(self):
        with open('champions.json') as f:
            d = json.load(f)
            for entry in d:
                new_champ = Champion(
                    name=entry['champion'], cost=entry['cost'], traits=entry['traits'])
                new_champ.save()

        with open('items.json') as f:
            d = json.load(f)
            for entry in d:
                new_item = Item(id_num=entry['id'], name=entry['name'])
                new_item.save()

        with open('hexes.json') as f:
            d = json.load(f)
            for entry in d:
                new_hex = Hex(name=entry['name'],
                              description=entry['description'])
                new_hex.save()

        with open('traits.json') as f:
            d = json.load(f)
            for entry in d:
                new_trait = Trait(
                    name=entry['name'], innate=entry['innate'], description=entry['description'], sets=entry['sets'])
                new_trait.save()

    def handle(self, *args, **options):
        self._create_tags()
