# Product Inventory API

A simple Product Inventory REST API built using Django REST Framework.

## Features
- List all products
- Add a product
- Update a product
- Delete a product
- Price validation (no negative values)

## Tech Stack
- Python
- Django
- Django REST Framework
- SQLite

## Setup Instructions

```bash
git clone <repo-url>
cd inventory_project
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
