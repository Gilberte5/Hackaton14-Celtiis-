from django.urls import path
from .viewsets import TouristicSiteViewSet, ReservationViewSet

urlpatterns = [
    # Liste tous les sites touristiques
    path("touristic-sites/", TouristicSiteViewSet.as_view({'get': 'list'}), name="touristic-site-list"),
    
    # Crée un nouveau site touristique
    path("touristic-sites/create/", TouristicSiteViewSet.as_view({'post': 'create'}), name="touristic-site-create"),
    
    # Détail d’un site touristique spécifique
    path("touristic-sites/<int:pk>/", TouristicSiteViewSet.as_view({'get': 'retrieve'}), name="touristic-site-detail"),
    
    # Met à jour un site touristique existant
    path("touristic-sites/<int:pk>/update/", TouristicSiteViewSet.as_view({'put': 'update'}), name="touristic-site-update"),
    
    # Met à jour partiellement un site touristique existant
    path("touristic-sites/<int:pk>/partial_update/", TouristicSiteViewSet.as_view({'patch': 'partial_update'}), name="touristic-site-partial-update"),
    
    # Supprime un site touristique
    path("touristic-sites/<int:pk>/delete/", TouristicSiteViewSet.as_view({'delete': 'destroy'}), name="touristic-site-delete"),

    # Liste toutes les réservations
    path("reservations/", ReservationViewSet.as_view({'get': 'list'}), name="reservation-list"),
    
    # Crée une nouvelle réservation
    path("reservations/create/", ReservationViewSet.as_view({'post': 'create'}), name="reservation-create"),
    
    # Détail d’une réservation spécifique
    path("reservations/<int:pk>/", ReservationViewSet.as_view({'get': 'retrieve'}), name="reservation-detail"),
    
    # Met à jour une réservation existante
    path("reservations/<int:pk>/update/", ReservationViewSet.as_view({'put': 'update'}), name="reservation-update"),
    
    # Met à jour partiellement une réservation existante
    path("reservations/<int:pk>/partial_update/", ReservationViewSet.as_view({'patch': 'partial_update'}), name="reservation-partial-update"),
    
    # Supprime une réservation
    path("reservations/<int:pk>/delete/", ReservationViewSet.as_view({'delete': 'destroy'}), name="reservation-delete"),

]
