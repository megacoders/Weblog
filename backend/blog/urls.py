from django.urls import path
from . import views


urlpatterns = [
    path('', views.ArticleList.as_view(), name="article_list"),
    # path('detail/<int:id>/<str:slug>/', views.ArticleDetail.as_view(), name="article_detail"),
]
