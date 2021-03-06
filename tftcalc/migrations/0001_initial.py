# Generated by Django 2.2.6 on 2019-10-11 18:44

from django.db import migrations, models
import django_mysql.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Champion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('data', django_mysql.models.JSONField(default=dict)),
            ],
            options={
                'db_table': 'champions',
            },
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('data', django_mysql.models.JSONField(default=dict)),
            ],
            options={
                'db_table': 'items',
            },
        ),
    ]
