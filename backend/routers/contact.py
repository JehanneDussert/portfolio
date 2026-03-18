import os
import logging
from fastapi import APIRouter, HTTPException, BackgroundTasks
from models import ContactForm, ContactResponse

logger = logging.getLogger(__name__)
router = APIRouter()

CONTACT_EMAIL = os.environ.get("CONTACT_EMAIL")

async def send_notification(form: ContactForm):
    if not CONTACT_EMAIL:
        logger.warning("CONTACT_EMAIL not set — logging only")
        logger.info("Contact from %s <%s> — %s", form.name, form.email, form.subject)
        return

    # Exemple Gmail via smtplib — ajoute aussi SMTP_USER + SMTP_PASSWORD dans Render
    import smtplib
    from email.message import EmailMessage
    msg = EmailMessage()
    msg["From"] = os.environ["SMTP_USER"]
    msg["To"] = CONTACT_EMAIL
    msg["Reply-To"] = form.email
    msg["Subject"] = f"[Portfolio] {form.subject}"
    msg.set_content(f"From: {form.name} <{form.email}>\n\n{form.message}")
    with smtplib.SMTP("smtp.office365.com", 587) as s:
        s.ehlo()
        s.starttls()
        s.ehlo()
        s.login(os.environ["SMTP_USER"], os.environ["SMTP_PASSWORD"])
        s.send_message(msg)

@router.post("", response_model=ContactResponse)
async def submit_contact(form: ContactForm, background_tasks: BackgroundTasks):
    if len(form.message.strip()) < 10:
        raise HTTPException(status_code=422, detail="Message too short.")
    background_tasks.add_task(send_notification, form)
    return ContactResponse(success=True, message="Message received. I'll get back to you soon.")