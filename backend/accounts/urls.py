from django.conf.urls import url
from django.urls import path
from . import views


urlpatterns = [
    path('users/', views.UserList.as_view(), name="users_list"),
    path('user/<int:pk>/', views.UserDetail.as_view(), name="user_detail"),
]
