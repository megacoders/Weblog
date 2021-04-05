from rest_framework.generics import ListAPIView, ListCreateAPIView
from .models import Article
from .serializers import ArticleSerializer


class ArticleList(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


