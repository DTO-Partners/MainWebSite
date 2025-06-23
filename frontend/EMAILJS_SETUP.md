# EmailJS Setup for DTO Partners Application Form

This document explains how to configure EmailJS to send application form submissions to `candidates@dtopartners.com`.

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Note down the **Service ID** (you'll need this later)

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up the template with these variables:

### Template Structure:
```
Subject: New Application - {{full_name}} ({{application_id}})

From: {{email}}
To: candidates@dtopartners.com

Application Details:
- Application ID: {{application_id}}
- Submission Date: {{submission_date}}
- Full Name: {{full_name}}
- Email: {{email}}
- Phone: {{phone}}
- Nationality: {{nationality}}
- Work Authorization: {{work_authorization}}
- Visa Assistance: {{visa_assistance}}
- CV File: {{cv_file_name}} ({{cv_file_size}})
- GDPR Consent: {{gdpr_consent}}

Professional Summary:
{{professional_summary}}

Technical Details:
- User Agent: {{user_agent}}
- Timestamp: {{timestamp}}
```

4. Save the template and note down the **Template ID**

## 4. Get Public Key

1. Go to **Account** settings
2. Find your **Public Key** (User ID)
3. Note it down

## 5. Configure Environment Variables

1. Copy `.env.example` to `.env` in the frontend directory
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID="your-service-id-here"
VITE_EMAILJS_TEMPLATE_ID="your-template-id-here"
VITE_EMAILJS_PUBLIC_KEY="your-public-key-here"
```

## 6. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the application form
3. Fill out and submit a test application
4. Check your email at `candidates@dtopartners.com`

## Email Template Variables

The application service sends these variables to EmailJS:

| Variable | Description |
|----------|-------------|
| `to_email` | Always set to "candidates@dtopartners.com" |
| `application_id` | Unique application ID (e.g., "DTO1AB2C3D4E5F") |
| `submission_date` | Formatted submission date and time |
| `full_name` | Applicant's full name |
| `email` | Applicant's email address |
| `phone` | Applicant's phone number |
| `nationality` | Applicant's nationality (or "Not specified") |
| `work_authorization` | Work authorization status |
| `visa_assistance` | Visa assistance requirements |
| `professional_summary` | Professional summary text |
| `cv_file_name` | Name of uploaded CV file |
| `cv_file_size` | Size of uploaded CV file |
| `gdpr_consent` | GDPR consent status ("Yes" or "No") |
| `user_agent` | Browser/device information |
| `timestamp` | ISO timestamp of submission |

## Troubleshooting

### Form submission fails
1. Check browser console for errors
2. Verify environment variables are set correctly
3. Ensure EmailJS service is active
4. Check EmailJS dashboard for usage limits

### Emails not received
1. Check spam/junk folder
2. Verify email template configuration
3. Check EmailJS dashboard for delivery status
4. Ensure email service is properly connected

### Rate limiting
- EmailJS free plan has monthly email limits
- Consider upgrading to a paid plan for production use

## Security Notes

- EmailJS public key is safe to expose in frontend code
- Never expose private keys or service credentials
- EmailJS handles email delivery securely
- Form data is validated before sending

## Production Considerations

1. **Rate Limiting**: Monitor EmailJS usage in production
2. **Error Handling**: Applications show user-friendly error messages
3. **Analytics**: Submission attempts are logged for monitoring
4. **GDPR Compliance**: Form includes proper consent mechanisms
