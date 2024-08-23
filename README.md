# Recipe Sharing Application

## Description

A Recipe Management Application built with Django (backend) and React.js (frontend). Users can sign up, log in, and manage recipes. Authenticated users can perform CRUD operations, while all users can view recipes.

## Table of Contents

- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)

## Backend Setup

### Prerequisites

- Python 3.x
- pip

### Installation

1. **Clone the Repository**

   ```bash
   https://github.com/poya-dev/Recipe-Sharing.git
   cd Recipe-Sharing
   ```

2. **Set Up Virtual Environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply Migrations**

   ```bash
   python manage.py migrate
   ```

5. **Create Superuser (optional)**

   ```bash
   python manage.py createsuperuser
   ```

6. **Run Server**

   ```bash
   python manage.py runserver
   ```

## Frontend Setup

### Prerequisites

- Node.js
- npm

### Installation

1. **Navigate to Frontend**

   ```bash
   cd frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Server**

   ```bash
   npm start
   ```

   Access the app at `http://localhost:3000`.

## Running the Application

1. **Start Backend**: Follow [Backend Setup](#backend-setup) instructions.

2. **Start Frontend**: Follow [Frontend Setup](#frontend-setup) instructions.

3. **Access Application**: Visit `http://localhost:3000` to interact with the app.

## Accessing Django Admin

1. **Ensure Backend is Running**: Follow [Backend Setup](#backend-setup) instructions.

2. **Open Django Admin**: Visit `http://localhost:8000/admin/`.

3. **Login**: Use the superuser credentials created with `createsuperuser` to log in and access the admin interface.
