from rest_framework import serializers
from .models import Reservation, TouristicSite
from django.utils.timezone import now


class TouristicSiteSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=True) 
    description = serializers.CharField(required=False, allow_blank=True)  # Facultatif, accepte des chaînes vides
    location = serializers.CharField(required=True)  
    image_url = serializers.URLField(required=False, allow_blank=True) 

    class Meta:
        model = TouristicSite
        fields = '__all__'
        read_only_fields = ['created_at']

class ReservationSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)  # Associé automatiquement à l'utilisateur connecté
    touristic_site = serializers.PrimaryKeyRelatedField(queryset=TouristicSite.objects.all(), required=True)  # Obligatoire
    reservation_date = serializers.DateTimeField(required=True)  # Obligatoire
    status = serializers.ChoiceField(
        choices=[('pending', 'Pending'), ('confirmed', 'Confirmed'), ('canceled', 'Canceled')],
        required=False,  # Facultatif, valeur par défaut possible
    )

    class Meta:
        model = Reservation
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']
    
        def validate_reservation_date(self, value):
            """
            Validation de la date de réservation dans le sérialiseur.
            """
            if value <= now():
                raise serializers.ValidationError("La date de réservation doit être dans le futur.")
            return value

        def validate(self, data):
            """
            Validation supplémentaire au niveau du sérialiseur.
            """
            # Vérifie si une réservation existe déjà pour cet utilisateur et ce site
            user = self.context['request'].user
            touristic_site = data.get('touristic_site')
            if Reservation.objects.filter(user=user, touristic_site=touristic_site).exists():
                raise serializers.ValidationError("Vous avez déjà une réservation pour ce site touristique.")
            return data