from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import User
from .serializers import UserSerializer
from api.permissions import (
    IsStaffOrReadOnly,
    IsSuperUser,
    IsSuperUserOrStaffReadOnly
)


class UserList(ListCreateAPIView):
    """
        NOTE:
            1- This view will show all users data(useful in frontend)
            2- Maybe this will change later, because of using django packages
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsSuperUser, ]


class UserDetail(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsSuperUserOrStaffReadOnly,)
