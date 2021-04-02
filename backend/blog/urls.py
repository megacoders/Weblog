from django.urls import path
from . import views


urlpatterns = [
    path('', views.ArticleList.as_view(), name="article_list"),
]