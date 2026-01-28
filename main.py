from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

import models, schemas
from database import engine, SessionLocal
from fastapi.middleware.cors import CORSMiddleware




app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_methods=["*"],
    allow_headers=["*"],
)
models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# CREATE
@app.get("/")
def root():
    return {"message": "FastAPI + PostgreSQL running"}
@app.post("/users/", response_model=schemas.UserResponse)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = models.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# READ
@app.get("/users/")
def get_users(db: Session = Depends(get_db)):
    return db.query(models.User).order_by(models.User.id).all()

# UPDATE
@app.put("/users/{user_id}")
def update_user(user_id:int,user:schemas.UserCreate,db:Session=Depends(get_db)):
    db_user=db.query(models.User).filter(models.User.id==user_id).first()
    db_user.name=user.name
    db_user.email=user.email
    db.commit()
    return db_user


# DELETE
@app.delete("/users/{user_id}")
def delete_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    db.delete(user)
    db.commit()
    return {"deleted": True}
