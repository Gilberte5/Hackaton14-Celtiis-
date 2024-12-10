from django.contrib import admin
from .models import Tag

class TagAdmin(admin.ModelAdmin):
    """
    Classe d'administration pour le modèle Tag.
    Permet de personnaliser l'apparence du modèle dans l'admin.
    """
    # Définir les champs à afficher dans la liste des tags
    list_display = ('name',)

    # Permet de rechercher par nom de tag
    search_fields = ('name',)

    # Permet de filtrer par nom de tag
    list_filter = ('name',)

    # Empêcher l'édition du champ 'name' pour les objets existants, mais permettre pour les nouveaux
    readonly_fields = ('name',)
    
    # Champs affichés dans le formulaire d'édition
    fields = ('name',)

# Enregistrer le modèle Tag dans l'admin
admin.site.register(Tag, TagAdmin)
