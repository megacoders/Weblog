from rest_framework.generics import ListAPIView, ListCreateAPIView
from accounts.models import User
from .models import Article
from .serializers import ArticleSerializer, UserSerialiser


class ArticleList(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class UserList(ListCreateAPIView):
    """
        NOTE:
            1- This view will show all users data(usefull in frontend)
            2- Maybe this will change later, because of using django packages
    """
    queryset = User.objects.all()
    serializer_class = UserSerialiser
