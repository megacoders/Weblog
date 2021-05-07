from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import  APIView
from django.shortcuts import get_object_or_404
from .models import Article, Category
from .serializers import ArticleSerializer, CategorySerializer
from .permissions import IsStaffOrReadOnly, IsSuperUser


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.filter(is_active=True)
    serializer_class = ArticleSerializer


class ArticleDetail(RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.filter(is_active=True)
    serializer_class = ArticleSerializer


class CategoryViewSet(ModelViewSet):
    """
    Showing all categries
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ArticleCategory(APIView):
    """
    This view will filter and show
    the articles by their category
    """
    def get(self, request, category):
        category = self.kwargs['category']
        category_model = get_object_or_404(Category, slug=category)
        article = Article.objects.filter(category=category_model)
        serializer = ArticleSerializer(article, many=True)
        return Response(serializer.data)

