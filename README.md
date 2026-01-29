# 🚀 Full Stack CRUD Application  
### Angular + FastAPI + PostgreSQL

This is a complete full-stack CRUD (Create, Read, Update, Delete) application built using:

- ⚡ FastAPI (Backend REST API)
- 🐘 PostgreSQL (Relational Database)
- 🅰 Angular (Frontend Dashboard)

The project demonstrates how Angular communicates with FastAPI APIs and how FastAPI persists data in PostgreSQL

---

## ✨ Features

- Create users
- View all users
- Update users (name + email)
- Delete users
- PostgreSQL auto-increment IDs
- Sorted user list
- Angular dashboard UI
- REST API
- Loading indicator
- Styled table

---

## 📁 Project Structure

Postgres-with-Fastapi/
│
├── frontend/ # Angular frontend
│
├── main.py # FastAPI entry point
├── database.py # SQLAlchemy database connection
├── models.py # Database models
├── schemas.py # Pydantic schemas
├── test_db.py
├── pyproject.toml
├── uv.lock
└── README.md


---

## 🧠 Tech Stack

### Backend
- FastAPI
- SQLAlchemy
- Psycopg2
- PostgreSQL

### Frontend
- Angular
- HttpClient
- FormsModule

---

## ⚙️ Backend Setup (FastAPI + PostgreSQL)

### 1️⃣ Create virtual environment

```bash
python -m venv .venv
.venv\Scripts\activate
2️⃣ Install dependencies
uv add fastapi uvicorn sqlalchemy psycopg2-binary

3️⃣ Configure PostgreSQL

Create database:

CREATE DATABASE fastapi_db;


Update database.py:

DATABASE_URL = "postgresql://postgres:password@localhost/fastapi_db"

4️⃣ Run FastAPI server
uvicorn main:app --reload


API available at:

http://127.0.0.1:8000


Swagger Docs:

http://127.0.0.1:8000/docs

🎨 Frontend Setup (Angular)

Go to frontend folder:

cd frontend


Install packages:

npm install


Run Angular app:

ng serve


Open browser:

http://localhost:4200
