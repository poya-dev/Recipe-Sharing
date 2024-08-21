from rest_framework import viewsets, permissions
from rest_framework.permissions import AllowAny
from rest_framework import generics
from .models import User
from .serializers import UserSerializer
from .serializers import UserRegistrationSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = [AllowAny]
