from collections import defaultdict
from fastapi import APIRouter, Request
from models import PageView, AnalyticsResponse

router = APIRouter()

# In-memory store — replace with Redis or a DB in production
_views: dict[str, int] = defaultdict(int)


@router.post("/track")
async def track_view(payload: PageView, request: Request):
    page = payload.page.strip("/") or "home"
    _views[page] += 1
    return {"success": True, "page": page, "count": _views[page]}


@router.get("", response_model=AnalyticsResponse)
async def get_analytics():
    total = sum(_views.values())
    return AnalyticsResponse(success=True, total_views=total, by_page=dict(_views))
