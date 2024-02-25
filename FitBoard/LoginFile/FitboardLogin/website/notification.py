from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import Notification
from . import db
from flask_login import login_required, current_user

notification = Blueprint('notification', __name__)

@notification.route('/notification')
@login_required
def view_notifications():
    return render_template('notification.html', user=current_user)



