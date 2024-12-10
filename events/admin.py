from django.contrib import admin
from .models import Event

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
     # Définir les champs à afficher dans la liste des événements
    list_display = ('title', 'description', 'start_date', 'end_date', 'location', 'category', 'organizer', 'created_at', 'updated_at')

    # Permet de filtrer les événements par catégorie, organisateur et dates
    list_filter = ('category', 'organizer', 'start_date', 'end_date', 'created_at')

    # Permet de rechercher par titre, catégorie, organisateur
    search_fields = ('title', 'category__name', 'organizer__username', 'description', 'location')

    # Permet d'ajouter une barre de recherche pour les tags
    filter_horizontal = ('tags',)

    # Définir les champs du formulaire d'édition et de création
    fields = ('title', 'description', 'date', 'location', 'start_date', 'end_date', 'category', 'organizer', 'tags')

    # Rendre les champs 'created_at' et 'updated_at' en lecture seule
    readonly_fields = ('created_at', 'updated_at')

    # Rendre les tags optionnels dans l'admin
    def save_model(self, request, obj, form, change):
        """
        Ajoute l'utilisateur connecté comme organisateur si l'utilisateur n'est pas déjà défini.
        """
        if not obj.organizer:
            obj.organizer = request.user  # Par défaut, attribue l'utilisateur actuel comme organisateur
        super().save_model(request, obj, form, change)