from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Reservation, TouristicSite
from .serializers import ReservationSerializer, TouristicSiteSerializer
from rest_framework.exceptions import ValidationError

class ReservationViewSet(viewsets.ModelViewSet):
    """
    ViewSet pour gérer les réservations.
    Permet de lister, créer, mettre à jour, supprimer et consulter les réservations.
    """
    queryset = Reservation.objects.all().select_related('user', 'touristic_site')  # Optimiser les requêtes
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticated]  # Assurer que l'utilisateur est authentifié

    def perform_create(self, serializer):
        """
        Associe l'utilisateur connecté à la réservation.
        Effectue une validation avant de créer la réservation.
        """
        # Validation de la réservation avant création
        user = self.request.user
        touristic_site = serializer.validated_data.get('touristic_site')

        # Vérifie si l'utilisateur a déjà une réservation pour ce site
        if Reservation.objects.filter(user=user, touristic_site=touristic_site).exists():
            raise ValidationError("Vous avez déjà une réservation pour ce site touristique.")

        # Associe l'utilisateur connecté à la réservation
        serializer.save(user=user)


class TouristicSiteViewSet(viewsets.ModelViewSet):
    """
    ViewSet pour gérer les sites touristiques.
    Permet de lister, créer, mettre à jour, supprimer et consulter les sites touristiques.
    """
    queryset = TouristicSite.objects.all().prefetch_related('reservations')  # Optimiser les requêtes
    serializer_class = TouristicSiteSerializer
    permission_classes = [IsAuthenticated]  # Assurer que l'utilisateur est authentifié

    def perform_create(self, serializer):
        """
        Associe l'utilisateur connecté à la création d'un site touristique.
        """
        # La création d'un site touristique peut être réalisée par un utilisateur authentifié.
        serializer.save()
