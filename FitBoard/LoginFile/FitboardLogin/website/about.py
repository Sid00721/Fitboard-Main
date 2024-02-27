from flask import Blueprint, render_template
from flask_login import current_user  # Add this line
from website.models import User

about = Blueprint('about', __name__)

@about.route('/about')
def about_page():
    return render_template('about.html', user=current_user)
