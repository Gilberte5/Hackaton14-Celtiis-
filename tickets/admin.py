from django.contrib import admin
from .models import TicketType, Ticket
from events.models import Event
from accounts.models import User

class TicketTypeAdmin(admin.ModelAdmin):
    """
    Classe d'administration pour le modèle TicketType.
    Permet de personnaliser l'apparence du modèle dans l'admin.
    """
    # Définir les champs à afficher dans la liste des types de billets
    list_display = ('name', 'event', 'price', 'quantity', 'created_at', 'updated_at')

    # Permet de filtrer les types de billets par événement et dates
    list_filter = ('event', 'created_at', 'updated_at')

    # Permet de rechercher par nom de type de billet
    search_fields = ('name', 'event__title')

    # Définir les champs du formulaire d'édition et de création
    fields = ('event', 'name', 'price', 'quantity')

    # Rendre les champs créés automatiquement en lecture seule
    readonly_fields = ('created_at', 'updated_at')

class TicketAdmin(admin.ModelAdmin):
    """
    Classe d'administration pour le modèle Ticket.
    Permet de personnaliser l'apparence du modèle dans l'admin.
    """
    # Définir les champs à afficher dans la liste des billets
    list_display = ('user', 'event', 'ticket_type', 'price', 'status', 'purchase_date')

    # Permet de filtrer les billets par événement, utilisateur, statut et date d'achat
    list_filter = ('event', 'user', 'status', 'purchase_date')

    # Permet de rechercher par événement, utilisateur, ou statut
    search_fields = ('event__title', 'user__username', 'status')

    # Définir les champs du formulaire d'édition et de création
    fields = ('event', 'user', 'ticket_type', 'price', 'status')

    # Rendre les champs créés automatiquement en lecture seule
    readonly_fields = ('purchase_date',)

# Enregistrer les modèles TicketType et Ticket dans l'admin
admin.site.register(TicketType, TicketTypeAdmin)
admin.site.register(Ticket, TicketAdmin)
