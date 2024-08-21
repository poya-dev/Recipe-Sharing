from rest_framework import viewsets, permissions
from .models import Recipe, Comment
from .serializers import RecipeSerializer, CommentSerializer

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, permissions.DjangoModelPermissions]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, permissions.DjangoModelPermissions]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)