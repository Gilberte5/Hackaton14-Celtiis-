from django.db import models
from accounts.models import User
from categories.models import Category
from tags.models import Tag

class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=255)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    tags = models.ManyToManyField(Tag, related_name='events',  null=True, 
    blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='events', default=1, null=True, 
    blank=True)
    organizer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='organized_events', default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
