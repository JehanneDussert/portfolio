from pydantic import BaseModel, EmailStr
from datetime import datetime


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str


class PageView(BaseModel):
    page: str
    referrer: str | None = None
    user_agent: str | None = None


class AnalyticsResponse(BaseModel):
    success: bool
    total_views: int
    by_page: dict[str, int]
