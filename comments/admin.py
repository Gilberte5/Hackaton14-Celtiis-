from django.contrib import admin
from .models import Comment
from events.models import Event
from accounts.models import User

class CommentAdmin(admin.ModelAdmin):
    """
    Classe d'administration pour le modèle Comment.
    Permet de personnaliser l'apparence du modèle dans l'admin.
    """
    # Définir les champs à afficher dans la liste des commentaires
    list_display = ('user', 'event', 'content', 'created_at')

    # Permet de filtrer les commentaires par utilisateur, événement et date de création
    list_filter = ('user', 'event', 'created_at')

    # Permet de rechercher par contenu, utilisateur et événement
    search_fields = ('content', 'user__username', 'event__title')

    # Définir les champs du formulaire d'édition et de création
    fields = ('event', 'user', 'content')

    # Rendre le champ 'created_at' en lecture seule
    readonly_fields = ('created_at',)

# Enregistrer le modèle Comment dans l'admin
admin.site.register(Comment, CommentAdmin)
