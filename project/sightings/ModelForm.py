from django import forms
from .models import Squirrel

class Createform(forms.ModelForm):

    class Meta:
        model = Squirrel
        fields=['Latitude',
                'Longitude']

