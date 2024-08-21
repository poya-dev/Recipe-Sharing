from django.conf import settings
from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    ingredients = models.TextField()
    instructions = models.TextField()
    image = models.ImageField(upload_to='recipes', null=True, blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='recipes')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    text = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='comments')
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='comments')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.recipe.title}"