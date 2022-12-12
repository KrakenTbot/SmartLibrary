# Generated by Django 4.1.3 on 2022-12-12 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library_app', '0003_book_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='status',
            field=models.CharField(choices=[('R', 'Reading'), ('W', 'Waiting'), ('A', 'Availible')], default='W', max_length=1),
        ),
    ]