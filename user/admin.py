from django.contrib import admin
from .models import UserProfile, Role


@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display = ['name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'is_active']
    list_filter = ['name', 'role']
    list_editable = ['role', 'is_active']
    prepopulated_fields = {'slug': ('name',)}
