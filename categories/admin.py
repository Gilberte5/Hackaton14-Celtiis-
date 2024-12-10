from django.contrib import admin
from .models import Category

class CategoryAdmin(admin.ModelAdmin):
    """
    Classe d'administration pour le modèle Category.
    Permet de personnaliser l'apparence du modèle dans l'admin.
    """
    # Définir les champs à afficher dans la liste des catégories
    list_display = ('name', 'description', 'created_at', 'updated_at')

    # Permet de filtrer les catégories par date de création ou date de mise à jour
    list_filter = ('created_at', 'updated_at')

    # Permet de rechercher par nom de catégorie
    search_fields = ('name',)

    # Définir les champs du formulaire d'édition et de création
    fields = ('name', 'description')

    # Rendre les champs 'created_at' et 'updated_at' en lecture seule, car ils sont générés automatiquement
    readonly_fields = ('created_at', 'updated_at')

# Enregistrer le modèle Category dans l'admin
admin.site.register(Category, CategoryAdmin)
