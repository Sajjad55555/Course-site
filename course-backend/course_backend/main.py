from fastapi import FastAPI
from .database.db import create_table
from .rout.rout import router
app = FastAPI()

@app.on_event("startup")
async def startup_event():
    print("Server started")
    create_table()
    print("table created succesfully")
app.include_router(router=router)   
    

    
