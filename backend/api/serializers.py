from rest_framework import serializers
from accounts.models import User
from .models import Article, Category


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'id', 'is_staff')


class ArticleSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()

    class Meta:
        model = Article
        fields = ['id', 'author', 'category', 'title', 'description', 'cover', 'created', 'updated']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
