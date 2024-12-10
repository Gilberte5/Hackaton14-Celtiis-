
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

class CustomUserAdmin(UserAdmin):
    # Affiche les champs que vous voulez dans la liste des utilisateurs
    list_display = ('username', 'email', 'first_name', 'last_name', 'role', 'is_active', 'is_staff', 'created_at', 'updated_at')
    
    # Ajoute la possibilité de filtrer par rôle
    list_filter = ('role', 'is_active', 'is_staff')
    
    # Permet de rechercher par certains champs
    search_fields = ('username', 'email', 'first_name', 'last_name')
    
    # Permet de personnaliser les champs affichés lors de la création ou de la modification d'un utilisateur
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'email')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Role', {'fields': ('role',)}),
        ('Important Dates', {'fields': ('last_login', 'created_at', 'updated_at')}),
    )
    
    # Pour rendre les champs de date en lecture seule
    readonly_fields = ('created_at', 'updated_at', 'last_login')

# Enregistrer le modèle `User` avec l'interface d'administration personnalisée
admin.site.register(User, CustomUserAdmin)
