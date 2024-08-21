from rest_framework import viewsets
from .models import Recipe, Comment
from .serializers import RecipeSerializer, CommentSerializer
from .permissions import IsAuthenticatedAndCreateAllowed

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticatedAndCreateAllowed]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticatedAndCreateAllowed]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)