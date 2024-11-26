from ..Schema import Form,AddEntry
from typing import Annotated
from fastapi import Depends
from ..database.db import get_session
from sqlmodel import Session,select



def form_entry(data:AddEntry , session:Annotated[Session,Depends(get_session)] ):
    statement =  Form(
        name=data.name,
        phone_number=data.phone_number
    )   
    session.add(statement)
    session.commit()
    session.refresh(statement)
    return statement

def get_form_entry(session:Annotated[Session,Depends(get_session)] ):
    statment = session.exec(select(Form)).all()
    return statment

    