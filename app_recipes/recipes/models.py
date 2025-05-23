from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=60)
    description = models.TextField(blank=True, null=True)
    def __str__(self):
        return self.name


class Recipe(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    category = models.ForeignKey(Category, related_name='recipes', on_delete=models.CASCADE)
    ingredients = models.TextField()
    instructions = models.TextField()

    def __str__(self):
        return self.title