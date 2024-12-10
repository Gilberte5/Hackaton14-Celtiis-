from django.urls import path
from .views import EventViewSet

urlpatterns = [
    # Liste tous les événements
    path("list/", EventViewSet.as_view({'get': 'list'}), name="event-list"),
    
    # Crée un nouvel événement
    path("create/", EventViewSet.as_view({'post': 'create'}), name="event-create"),
    
    # Détail d’un événement spécifique
    path("get/<int:pk>/", EventViewSet.as_view({'get': 'retrieve'}), name="event-detail"),
    
    # Met à jour un événement existant
    path("update/<int:pk>/", EventViewSet.as_view({'put': 'update'}), name="event-update"),
    
    # Met à jour partiellement un événement existant
    path("partial_update/<int:pk>/", EventViewSet.as_view({'patch': 'partial_update'}), name="event-partial-update"),
    
    # Supprime un événement
    path("delete/<int:pk>/", EventViewSet.as_view({'delete': 'destroy'}), name="event-delete"),
    
    # Action personnalisée (par exemple, récupérer les participants)
    path("participants/<int:pk>/", EventViewSet.as_view({'get': 'participants'}), name="event-participants"),
]
