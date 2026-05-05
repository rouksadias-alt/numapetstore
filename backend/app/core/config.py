from functools import lru_cache

from pydantic import AnyHttpUrl
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_env: str = "development"
    app_name: str = "Numapetstore API"
    public_site_url: AnyHttpUrl = "https://numapet.store"
    public_api_url: AnyHttpUrl = "https://api.numapet.store"
    database_url: str
    cors_origins: str = "http://localhost:3000,https://numapet.store"
    google_sheets_webhook_url: str | None = None
    google_sheets_webhook_secret: str | None = None
    meta_pixel_id: str | None = None
    meta_capi_access_token: str | None = None
    tiktok_pixel_id: str | None = None
    tiktok_access_token: str | None = None
    snap_pixel_id: str | None = None
    snap_access_token: str | None = None
    snap_ad_account_id: str | None = None

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    @property
    def sqlalchemy_database_url(self) -> str:
        url = self.database_url
        if url.startswith("postgres://"):
            url = url.replace("postgres://", "postgresql+asyncpg://", 1)
        return url

    @property
    def cors_origin_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
