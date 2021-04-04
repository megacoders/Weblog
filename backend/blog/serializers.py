from rest_framework import serializers
from .models import Article
from accounts.models import User


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['author', 'category', 'title', 'description', 'cover', 'created', 'updated']


class UserSerialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
