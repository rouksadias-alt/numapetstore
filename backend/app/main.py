from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import health, orders, tracking
from app.core.config import get_settings
from app.db import run_bootstrap_migration

settings = get_settings()


@asynccontextmanager
async def lifespan(app: FastAPI):
    await run_bootstrap_migration()
    yield


app = FastAPI(title=settings.app_name, lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api")
app.include_router(orders.router, prefix="/api")
app.include_router(tracking.router, prefix="/api")
