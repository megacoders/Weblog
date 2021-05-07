from django.urls import path, include
from rest_framework import routers
from .views import (
    ArticleViewSet,
    CategoryViewSet,
    ArticleCategory,
)


router = routers.SimpleRouter()
router.register('articles_list', ArticleViewSet, basename="articles")
router.register('categories', CategoryViewSet, basename="categories")


urlpatterns = [
    path('api/', include(router.urls)),
    # path('', views.ArticleViewSet.as_view({'get':'list'}), name="article_list"),
    # path('detail/<int:id>/<str:slug>/', views.ArticleDetail.as_view(), name="article_detail"),
    path('api/c_articles/<str:category>/', ArticleCategory.as_view(), name="article_category"),
]

