from django.contrib import admin
from .models import Songs

@admin.register(Songs)
class SongsAdmin(admin.ModelAdmin):
    list_display = ['title']
    list_filter = ['title']
