from rest_framework.permissions import BasePermission

class IsAuthenticatedAndCreateAllowed(BasePermission):
    def has_permission(self, request, view):
        if request.method in ['POST']:
            return request.user and request.user.is_authenticated
        return request.method in ['GET', 'HEAD', 'OPTIONS']
