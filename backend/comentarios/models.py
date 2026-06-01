from django.db import models


from django.db import models


class Comentarios(models.Model):
    #agregando 9 campos más el id de tipo int que se genera en automatico seran 10
    titulo = models.CharField(max_length=200)
    grupo_interprete = models.CharField(max_length=200)
    genero = models.CharField(max_length=100)
    nacionalidad = models.CharField(max_length=100)
    fecha_lanzamiento = models.DateField()
    idioma = models.CharField(max_length=100)
    duracion_minutos = models.FloatField()
    video = models.URLField(max_length=300)
    comentarios = models.TextField(blank=True, null=True)


    def __str__(self):
        return self.titulo