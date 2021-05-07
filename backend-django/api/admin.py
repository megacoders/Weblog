from django.contrib import admin
from .models import AboutUsModel, Article, Category, ContactUsModel


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created', 'cover')
    list_filter = ('title', 'created', 'author')
    prepopulated_fields = {'slug': ('title',)}


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(Article, ArticleAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(AboutUsModel)
admin.site.register(ContactUsModel)
