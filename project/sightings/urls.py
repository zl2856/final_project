from django.urls import path
from . import views

from django.conf.urls import url
from django.contrib import admin
from .views import (createpost, detail_post_view, editpost)

urlpatterns = [
        path('', views.all),
        path('', views.map),
        path('<int:unique_squirrel_id>', views.update),
        url(r'^create/', createpost, name='createpost'),
        url(r'^(?P<id>\d+)/$', detail_post_view, name='detail'),
        url(r'^(?P<id>\d+)/edit/$', editpost, name='editpost'),
        ]
