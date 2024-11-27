from ..crud.crud import get_form_entry,form_entry
from ..Schema import AddEntry
from fastapi.routing import APIRouter
from sqlmodel import Session
from fastapi import Depends
from ..database.db import get_session
from  typing import Annotated
router = APIRouter()

@router.post("/form")
def create_form_entry(form: AddEntry,session:Annotated[Session,Depends(get_session)] ):
    data = form_entry(data=form,session=session)
    return data

@router.get('/form/get')
def get_form(session: Annotated[Session, Depends(get_session)]):
    data = get_form_entry(session=session)  
    return data
    