from rest_framework import serializers
from .models import Event
from categories.models import Category
from accounts.models import User
from tags.models import Tag

class EventSerializer(serializers.ModelSerializer):
    tags = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Tag.objects.all(), required=False
    )
    category = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), required=False
    )
    organizer = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), required=False
    )
    title = serializers.CharField(required=True)
    description = serializers.CharField(required=True, allow_blank=True)
    date = serializers.DateTimeField(required=False, allow_null=True)
    location = serializers.CharField(required=False, allow_blank=True)
    start_date = serializers.DateTimeField(required=False, allow_null=True)
    end_date = serializers.DateTimeField(required=False, allow_null=True)


    class Meta:
        model = Event
        fields = ['id', 
                  'title', 
                  'description', 
                  'date', 
                  'location',  
                  'tags', 
                  'start_date', 
                  'end_date',
                  'category', 
                  'organizer', 
                  'created_at', 
                  'updated_at'
                ]


    def validate(self, data):
        start_date = data.get('start_date')
        end_date = data.get('end_date')
        if start_date and end_date and start_date > end_date:
            raise serializers.ValidationError("La date de début doit être antérieure à la date de fin.")
        return data
