from django.contrib import admin
from .models import TouristicSite, Reservation

class TouristicSiteAdmin(admin.ModelAdmin):
    # Affiche les champs dans la liste des objets
    list_display = ('name', 'location', 'created_at')
    # Permet de filtrer par date de création
    list_filter = ('created_at',)
    # Permet de rechercher par nom et localisation
    search_fields = ('name', 'location')
    # Permet d'afficher un champ de recherche dans le formulaire de création et de modification
    fields = ('name', 'description', 'location', 'image_url')
    # Les champs sont visibles dans le formulaire de création
    readonly_fields = ('created_at',)
    # Si vous voulez limiter l'ajout d'éléments en fonction de certaines conditions, vous pouvez ajouter des actions personnalisées

class ReservationAdmin(admin.ModelAdmin):
    # Affiche les champs dans la liste des objets
    list_display = ('user', 'touristic_site', 'reservation_date', 'status', 'created_at')
    # Permet de filtrer par statut et par date de création
    list_filter = ('status', 'created_at')
    # Permet de rechercher par nom d'utilisateur ou par site touristique
    search_fields = ('user__username', 'touristic_site__name')
    # Définir les champs du formulaire
    fields = ('user', 'touristic_site', 'reservation_date', 'status')
    # Champ readonly pour les dates de création et de mise à jour
    readonly_fields = ('created_at', 'updated_at')
    # Personnalisation des actions ou de la présentation peut être ajoutée ici si nécessaire

# Enregistrez les classes d'administration pour vos modèles
admin.site.register(TouristicSite, TouristicSiteAdmin)
admin.site.register(Reservation, ReservationAdmin)
