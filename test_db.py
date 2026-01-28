import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="fastapi_db",
    user="postgres",
    password="admin123"
)

print("Connected successfully!")
