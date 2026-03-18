import logging
from fastapi import APIRouter, HTTPException, BackgroundTasks
from models import ContactForm, ContactResponse

logger = logging.getLogger(__name__)
router = APIRouter()

# In production: replace with SMTP (smtplib / FastMail) or a service like Resend
async def send_notification(form: ContactForm):
    logger.info(
        "New contact from %s <%s> — subject: %s",
        form.name, form.email, form.subject,
    )
    # Example SMTP snippet (uncomment and configure):
    # import smtplib
    # from email.message import EmailMessage
    # msg = EmailMessage()
    # msg["From"] = "portfolio@yourdomain.com"
    # msg["To"] = "jehanne@yourdomain.com"
    # msg["Subject"] = f"[Portfolio] {form.subject}"
    # msg.set_content(f"From: {form.name} <{form.email}>\n\n{form.message}")
    # with smtplib.SMTP_SSL("smtp.yourprovider.com", 465) as s:
    #     s.login("user", "password")
    #     s.send_message(msg)


@router.post("", response_model=ContactResponse)
async def submit_contact(form: ContactForm, background_tasks: BackgroundTasks):
    if len(form.message.strip()) < 10:
        raise HTTPException(status_code=422, detail="Message too short.")
    background_tasks.add_task(send_notification, form)
    return ContactResponse(success=True, message="Message received. I'll get back to you soon.")
