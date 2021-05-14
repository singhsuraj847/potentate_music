from django.shortcuts import render
from user.models import UserProfile
from songs.models import Songs


def home_view(request):
    team = UserProfile.objects.filter(is_active=True)
    songs = Songs.objects.all()
    return render(request, 'home.html', {'team': team, 'songs': songs})
