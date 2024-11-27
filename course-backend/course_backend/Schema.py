from sqlmodel import SQLModel,Field
from pydantic import BaseModel



class Form(SQLModel,table = True):
    id: int = Field(default=None, primary_key=True)
    name: str
    phone_number: str

class AddEntry(BaseModel):
    name: str
    phone_number: str
    