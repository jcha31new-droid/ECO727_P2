from rest_framework import routers
from .views import ComentariosViewSet


router = routers.DefaultRouter()
router.register(r'comentarios', ComentariosViewSet)



