from django.shortcuts import render
from django.http import HttpResponse
from .models import Squirrel
def all(request):
    squirrels = Squirrel.objects.all()
    context = {
            'squirrels':squirrels,
            }
    return render(request,'sightings/all.html', context)

def map(request):
    squirrels = Squirrel.objects.all()
    context = {
            'squirrels':squirrels,
        }
    return render(request, 'map/map.html', context)
