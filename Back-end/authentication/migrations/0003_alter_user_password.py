# Generated by Django 4.1.3 on 2022-12-26 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_user_birthday_user_comment_user_home_address_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(default='MPNhvTE', max_length=130),
        ),
    ]
