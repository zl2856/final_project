from django.shortcuts import render
from django.http import HttpResponse
from .models import Squirrel


def list(request):
    context = {
        'squirrels': Squirrel.objects.all(),
    }
    return render(request, 'sightings/index.html', context)

def map(request):
    context = {
        'squirrels': Squirrel.objects.all(),
    }
    return render(request, 'map/map.html', context)

def update(request, unique_squirrel_id):
    squirrel = Squirrel.objects.get(id=unique_squirrel_id)
    if request.method == 'POST':
        form = SquirrelForm(request.POST, instance=squirrel)
        if form.is_valid():
            form.save()
            return redirect(f'/sightings/{Unique_Squirrel_id}')
    else:
        form = SquirrelForm(instance=Squirrel)

    context = {
        'form':form,
    }

    return render(request, 'sightings/update.html', context)

def create(request):
    if request.method == 'POST':
        form = SquirrelForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(f'/sightings/list')
    else:
        form = SquirrelForm()

    context = {
        'form':form,
    }
    return render(request, 'sightings/add.html', context)



