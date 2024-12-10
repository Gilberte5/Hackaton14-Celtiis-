from django.contrib import admin
from django.urls import include, path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.conf import settings
from django.conf.urls.static import static

# Définir la vue du schéma Swagger
schema_view = get_schema_view(
    openapi.Info(
        title="Ariya",
        default_version="v1",
        description="Ariya une plateforme de gestion des évènement.",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    # Documentation Swagger
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    # Documentation Redoc
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),

    # Routes Django Admin
    path("admin/", admin.site.urls),

    path("events/", include("events.urls")),
    path("tourism/", include("tourism.urls")),
]
