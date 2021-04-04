from rest_framework.generics import ListCreateAPIView
from .models import User


class UserList(ListCreateAPIView):
    """
        NOTE:
            1- This view will show all users data(usefull in frontend)
            2- Maybe this will change later, because of using django packages
    """
    queryset = User.objects.all()
    serializer_class = UserSerialiser
