from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListCreateAPIView
from .models import Article, Category
from .serializers import ArticleSerializer, CategorySerializer
from .permissions import IsStaffOrReadOnly, IsSuperUser, IsSuperUserOrStaffReadOnly


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.filter(is_active=True)
    serializer_class = ArticleSerializer


class ArticleDetail(RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.filter(is_active=True)
    serializer_class = ArticleSerializer
    permission_classes = (IsStaffOrReadOnly,)


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
