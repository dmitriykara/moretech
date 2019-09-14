from flask import Flask, Response, request
from flask_cors import CORS
from config import config 

def create_app(config_name):
    'Create app using config.py'
    app = Flask(__name__)

    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    from .api import api_module
    app.register_blueprint(api_module, url_prefix='/api/v1.0')

    CORS(app)

    app.register_error_handler(Exception, f=handle_error)
    
    if True:
        import logging
        from logging.handlers import RotatingFileHandler
        import os
            
        app.logger = logging.getLogger('Logger')

        if not os.path.exists('logs'):
            os.mkdir('logs')
        file_handler = RotatingFileHandler('logs/iplegist.log',
                                            maxBytes=10 * 1024 * 1024,
                                            backupCount=1)
        file_handler.setFormatter(logging.Formatter(
            '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'))
        file_handler.setLevel(logging.ERROR)
        app.logger.addHandler(file_handler)

        app.logger.setLevel(logging.INFO)
        app.logger.info('IPLegist startup')
   
    return app

def handle_error(e):
    from flask import current_app as app

    'Universal error handler'

    try: #Check if error is HTTP exception
        
        if e.code < 400: #If not exception (2** or 3**) continue work
            return Response.force_type(e, request.environ)
        elif e.code == 401:
            return '401 unauthorized', 401
        elif e.code == 404:
            return '404 Page Not Found', 404
        else:
            print(e.description)
            app.logger.error(f'{e.code} {e.description}') #Log to log file
            return f'{e.code} {e.description}', e.code 
        raise e #if 4** but not 404 or if 5**
    
    except: #For all exceptions
        print(str(e))
        app.logger.error(str(e)) #Log to log file
        return '500 Internal Server Error', 500
