import os
import datetime

class Config:
    #Secret key for CSRF Protection
    #SECRET_KEY = os.environ.get('SECRET_KEY') or 'v3cu5tnc-4vm0hfwc5otuWQC2n4,pv5umgj4p,o2umv{5g4cp5cgim4px,gwREW'
    
    #Constant to make universal error handler /main/errors.py
    TRAP_HTTP_EXCEPTIONS = True
    JWT_SECRET_KEY = '[q4vint[2309t2c09gP(%,ho5v4hpuHM%Pu4h5<P3%HMVP3uh%P5GHI4<MH@N#CUIH#PIUZ2h3xmf'
    BUNDLE_ERRORS = True

    #Method for future
    @staticmethod
    def init_app(app):
        pass

class DevelopmentConfig(Config):
    'Behavior for development mode'
    DEBUG = True
    HOST = os.environ.get('HOST') or '127.0.0.1'
    PORT = os.environ.get('PORT') or 5000

class ProductionConfig(Config):
    'Behavior for production mode'
    DEBUG = False
    HOST = os.environ.get('HOST') or '127.0.0.1'
    PORT = os.environ.get('PORT') or 443

#Bind behavior to mode
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,

    'default': DevelopmentConfig
}