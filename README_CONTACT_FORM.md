# Contact Form Setup for Teeja Design

## Overview
This system handles contact form submissions from your website and saves them to JSON files. You can also optionally receive email notifications.

## Setup Instructions

### 1. Install Python Dependencies
```bash
pip install -r requirements.txt
```

### 2. Configure Email Notifications (Optional)
If you want to receive email notifications when someone submits the contact form:

1. Open `server.py`
2. Update these lines with your email details:
   ```python
   EMAIL_USER = 'your-email@gmail.com'  # Your Gmail address
   EMAIL_PASSWORD = 'your-app-password'  # Your Gmail app password
   ```

3. To get a Gmail app password:
   - Go to your Google Account settings
   - Enable 2-factor authentication
   - Generate an app password for "Mail"

### 3. Start the Server
```bash
python server.py
```

The server will start on `http://localhost:5000`

## How It Works

### Form Submission
- When users fill out the contact form, data is sent to `/submit-contact`
- The data is saved to JSON files in the `data/` folder
- Files are organized by month (e.g., `contacts_202412.json`)

### Data Storage
- **Location**: `data/contacts_YYYYMM.json`
- **Format**: JSON with timestamp, name, phone, email (optional), service, and message
- **Example**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 9876543210",
    "service": "residential",
    "message": "I need help with my house design",
    "timestamp": "2024-12-20 14:30:25"
  }
  ```

### View Submissions
- **URL**: `http://localhost:5000/view-contacts`
- **Features**: 
  - View all submissions in a web interface
  - Sorted by newest first
  - Shows total count of submissions

## Form Fields

### Required Fields:
- **Name**: User's full name
- **Phone**: Contact phone number
- **Service**: Selected service from dropdown
- **Message**: Project description

### Optional Fields:
- **Email**: User's email address (not mandatory)

## File Structure
```
Arch Website/
├── server.py              # Main server file
├── requirements.txt       # Python dependencies
├── data/                 # Contact submissions (created automatically)
│   ├── contacts_202412.json
│   └── contacts_202501.json
└── README_CONTACT_FORM.md # This file
```

## Security Notes
- The server runs on localhost by default
- For production, consider:
  - Using HTTPS
  - Adding rate limiting
  - Implementing CSRF protection
  - Using environment variables for sensitive data

## Troubleshooting

### Common Issues:

1. **Port already in use**:
   ```bash
   # Change port in server.py
   app.run(debug=True, host='0.0.0.0', port=5001)
   ```

2. **Email not sending**:
   - Check your Gmail app password
   - Ensure 2-factor authentication is enabled
   - Check firewall settings

3. **Form not submitting**:
   - Ensure server is running
   - Check browser console for errors
   - Verify form action URL is correct

## Production Deployment

For production deployment, consider:
- Using a proper WSGI server (Gunicorn, uWSGI)
- Setting up a reverse proxy (Nginx)
- Using environment variables for configuration
- Implementing proper logging
- Adding database storage instead of JSON files 