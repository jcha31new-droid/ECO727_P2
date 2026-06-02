from rest_framework import viewsets
from .models import Comentarios #Este se cambia al nombre de la clase models
from .serializers import ComentariosSerializer #Esto se cambiar por el nombre de la clase del archivo serializes


class ComentariosViewSet(viewsets.ModelViewSet): #Nombre de la clase views
    queryset = Comentarios.objects.all()   #Nombre del model
    serializer_class = ComentariosSerializer #Nombre del serializers
