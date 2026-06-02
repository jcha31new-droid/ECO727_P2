from django.db import models


class Comentarios(models.Model):
    #agregando 9 campos más el id de tipo int que se genera en automatico seran 10
    nombre = models.CharField(max_length=200)
    genero = models.CharField(max_length=200)
    fecha = models.DateField()
    grado = models.CharField(max_length=100)
    grupo = models.CharField(max_length=100)
    turno = models.CharField(max_length=100)
    materia = models.CharField(max_length=100)
    docente = models.CharField(max_length=100)
    comentario = models.TextField(blank=True, null=True)


    def __str__(self):
        return self.nombre