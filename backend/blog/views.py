from rest_framework.generics import  RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ModelViewSet
from .models import Article
from .serializers import ArticleSerializer, CategorySerializer
from .permissions import IsStaffOrReadOnly, IsSuperUser, IsSuperUserOrStaffReadOnly


class ArticleViewSet(ModelViewSet):
    # queryset = Article.objects.filter(is_active=True)  # is_active field is not created
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetail(RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsStaffOrReadOnly, )


class CategoryViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = CategorySerializer