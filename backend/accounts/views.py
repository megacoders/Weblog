from rest_framework import permissions
from rest_framework.generics import ListCreateAPIView
from .models import User
from .serializers import UserSerialiser
from blog.permissions import IsSuperUser

class UserList(ListCreateAPIView):
    """
        NOTE:
            1- This view will show all users data(usefull in frontend)
            2- Maybe this will change later, because of using django packages
    """
    queryset = User.objects.all()
    serializer_class = UserSerialiser
    permission_classes = [IsSuperUser,]
