from typing import Any

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/tracking")


class TrackingEvent(BaseModel):
    event_name: str
    event_id: str
    order_id: str | None = None
    value: float | None = None
    currency: str = "USD"
    payload: dict[str, Any] = {}


@router.post("/events")
async def track_event(event: TrackingEvent):
    # Provider fan-out stubs live here: Meta CAPI, TikTok Events API, Snap CAPI.
    # Keep server tokens in backend env only and use event.event_id for dedup.
    return {"ok": True, "event_id": event.event_id}
