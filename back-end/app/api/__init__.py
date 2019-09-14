from flask import Blueprint
from flask_restful import Api

api_module = Blueprint('api_module', __name__)

api = Api(api_module)

blacklist = set()

"""
from .resources.login                   import Login
from .resources.staff                   import Staff
from .resources.links_analysis          import LinksAnalysis
from .resources.dashboard               import Dashboard
from .resources.registration            import Registration

api.add_resource(Login, '/login')
api.add_resource(Staff, '/staff')
api.add_resource(LinksAnalysis, '/links')
api.add_resource(Dashboard, '/dashboard')
api.add_resource(Registration, '/registration')
"""
