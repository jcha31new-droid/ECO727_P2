from django.contrib import admin
from django.urls import path, include # se agrega el include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('comentarios.urls')),
]
