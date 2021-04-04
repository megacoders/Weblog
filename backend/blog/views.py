from rest_framework.generics import ListAPIView, ListCreateAPIView
from .models import Article
from accounts.models import User
from .serializers import ArticleSerializer, UserSerialiser


class ArticleList(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class UserList(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerialiser
