from django.db import models
from accounts.models import User # not created yet
from django.urls import reverse


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100)

    def __str__(self):
        return self.title


class Article(models.Model):
    """
        NOTE: 
            1- The user models is not created, 
            2- The author field must be null because of on_delete
            3- The descritpion will change to ckediter fields
    """
    STATUS_CHOICES = (
        ('d', 'draft'),
        ('p', "publish"),
    )
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    description = models.TextField()
    cover = models.ImageField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f'{self.user} created {self.title}'

    def get_absolute_url(self):
	    return reverse('blog:article_detail', args=[self.id, self.slug])




