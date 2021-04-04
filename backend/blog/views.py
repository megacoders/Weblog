from rest_framework.generics import ListAPIView
from .models import Article
from .serializers import ArticleSerializer


class ArticleList(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
