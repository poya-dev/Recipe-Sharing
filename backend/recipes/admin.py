from django.contrib import admin
from .models import Recipe, Comment

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'created_at', 'updated_at')
    search_fields = ('title', 'description')
    list_filter = ('created_at', 'user')

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('text', 'user', 'recipe', 'created_at')
    search_fields = ('text',)
    list_filter = ('created_at', 'user', 'recipe')
