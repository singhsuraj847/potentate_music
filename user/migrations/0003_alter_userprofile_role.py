# Generated by Django 3.2 on 2021-05-12 11:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_auto_20210512_1709'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='role',
            field=models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='user.role'),
        ),
    ]
