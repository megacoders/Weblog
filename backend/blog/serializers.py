from rest_framework import serializer
from .models import Article


class ArticleSerializer(serializers.Serializer):
    model = Article
    fields = ('author', 'category', 'title', 'description', 'cover', 'created', 'updated')
