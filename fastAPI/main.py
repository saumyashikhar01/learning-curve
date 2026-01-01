from contextlib import asynccontextmanager
from datetime import datetime, timezone
from random import randint
from fastapi import Depends, FastAPI, HTTPException, Response
from typing import Annotated, Any, Generic, TypeVar
from dataclasses import Field 


from pydantic import BaseModel
from sqlmodel import SQLModel, Session, create_engine, select


class User(SQLModel, table=True):
    user_id: int | None = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    lastmail_date: datetime | None = Field(default=None, index=True)
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc), nullable=True, index=True)

class UserCreate(SQLModel):
    name: str
    lastmail_date: datetime | None = None

sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session

SessionDependency = Annotated[Session, Depends(get_session)]

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    with Session(engine) as session:
        if not session.exec(select(User)).first():
            session.add_all([
                User(name="Drp", lastmail_date=datetime.now()),
                User(name="ssp", lastmail_date=datetime.now())
                ])
    yield
    

app = FastAPI(root_path="/api/v1", lifespan=lifespan)

@app.get("/")
async def read_root():
    return {"message": "Hello World"}

T = TypeVar("T")
class Response(BaseModel, Generic[T]):
    data: T

@app.get("/users", response_model=Response[list[User]])
async def read_users(session: SessionDependency):
    data = session.exec(select(User)).all()
    return {"data": data}

@app.get("/users/{id}", response_model=Response[User])
async def read_users(id: int, session: SessionDependency):
    data = session.get(User, id)
    if not data:
        raise HTTPException(status_code=404)
    return {"data": data}

@app.post("/users", status_code=201, response_model=Response[User])
async def create_user(user: UserCreate, session: SessionDependency):
    db_user = User.model_validateuser(user)
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return {"data": db_user}
    
@app.put("/users/{id}", response_model=Response[User])
async def uppdate_user(user_id: int, user: UserCreate, session: SessionDependency):
    data = session.get(User, id)
    if not data:
        raise HTTPException(status_code=404)
    data.name = user.name
    data.lastmail_date = user.lastmail_date
    session.add(data)
    session.commit()
    session.refresh(data)
    return {"data": data}

@app.delete("/users/{id}", status_code=204)
async def dalate_user(id: int, session: SessionDependency):
    data = session.get(User, id)
    if not data:
        raise HTTPException(status_code=404)
    session.delete(data)
    session.commit()
