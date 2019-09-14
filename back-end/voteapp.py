import os
from app import create_app

#Create app
app = create_app(os.getenv('FLASK_CONFIG') or 'default')

if __name__ == "__main__":
    app.run(
        host=app.config['HOST'],
        port=app.config['PORT']
    )