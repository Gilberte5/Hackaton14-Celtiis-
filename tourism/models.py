
from django.db import models
from events.models import Event
from django.core.exceptions import ValidationError
from django.utils.timezone import now
from accounts.models import User
   

class TouristicSite(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    image_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)

class Reservation(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('canceled', 'Canceled'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reservations')
    touristic_site = models.ForeignKey(TouristicSite, on_delete=models.CASCADE, related_name='reservations')
    reservation_date = models.DateTimeField()
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)




    def clean(self):
        """
        Validations personnalisées au niveau du modèle.
        """
        # Vérifie si la date de réservation est dans le futur
        if self.reservation_date <= now():
            raise ValidationError("La date de réservation doit être dans le futur.")

        # Vérifie si une réservation existe déjà pour ce site et cet utilisateur
        if Reservation.objects.filter(user=self.user, touristic_site=self.touristic_site).exists():
            raise ValidationError("Vous avez déjà une réservation pour ce site touristique.")

        # Vérifie que le statut est valide
        if self.status not in dict(self.STATUS_CHOICES):
            raise ValidationError("Statut de réservation non valide.")

    def save(self, *args, **kwargs):
        """
        Appelle les validations avant de sauvegarder.
        """
        self.clean()
        super().save(*args, **kwargs)
