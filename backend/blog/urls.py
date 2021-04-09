from django.urls import path, include
from .views import ArticleViewSet
from rest_framework import routers
from . import views


router = routers.SimpleRouter()
router.register('', ArticleViewSet, basename="articles")

urlpatterns = [
    # path('', views.ArticleViewSet.as_view({'get':'list'}), name="article_list"),
    # path('detail/<int:id>/<str:slug>/', views.ArticleDetail.as_view(), name="article_detail"),
    path('', include(router.urls))
]
