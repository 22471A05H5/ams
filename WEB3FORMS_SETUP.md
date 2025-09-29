# Web3Forms Setup Guide for AMS ElevateX Contact Form

## 📧 Overview
This guide will help you set up Web3Forms to receive contact form submissions directly to `info@amselevatex.com`.

## 🚀 Step 1: Create Web3Forms Account
1. Go to [Web3Forms.com](https://web3forms.com/)
2. Click "Get Started for Free"
3. Sign up with your email address
4. Verify your email address

## 🔧 Step 2: Create New Form
1. **Dashboard:**
   - Click "Create New Form"
   - Enter form name: "AMS ElevateX Contact Form"
   - Enter your email: `info@amselevatex.com`

2. **Get Access Key:**
   - After creating the form, you'll get an **Access Key**
   - Copy this key (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

## 🛡️ Step 2.5: Configure Anti-Spam Settings
To ensure emails land in inbox (not spam):

1. **In Web3Forms Dashboard:**
   - Go to your form settings
   - Enable "Spam Protection"
   - Set "From Email" to: `noreply@amselevatex.com`
   - Enable "Reply-To" field mapping

2. **Email Provider Setup (Gmail/Outlook):**
   - Add `notifications@web3forms.com` to your contacts
   - Add `noreply@amselevatex.com` to your contacts
   - Create a filter for emails with subject containing "[AMS ElevateX]"
   - Mark these emails as "Important" and "Never Spam"

## 📋 Step 3: Update Configuration
Edit the file `src/config/web3forms.ts`:

```typescript
export const WEB3FORMS_CONFIG = {
  ACCESS_KEY: 'your-actual-access-key-here', // Replace with your Web3Forms access key
  API_URL: 'https://api.web3forms.com/submit',
};
```

## ✅ Step 4: Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your `info@amselevatex.com` inbox

## 🎯 Expected Result
When users submit the contact form:
- ✅ They see "Sending message..." notification
- ✅ Email is sent directly to `info@amselevatex.com`
- ✅ They see "Thank you for your message! 🎉" confirmation
- ✅ Form clears automatically
- ✅ You receive a formatted email with all their details

## 📧 Email Format You'll Receive
```
Subject: New Contact Form Submission from [Client Name]

From: AMS ElevateX Website

Name: [Client Name]
Email: [Client Email]
Phone: [Phone Number or 'Not provided']
Service Interest: [Selected Service or 'Not specified']

Message:
[Client's Message]
```

## 🔒 Security & Features
- ✅ **Spam Protection:** Built-in spam filtering
- ✅ **No Backend Required:** Pure frontend solution
- ✅ **GDPR Compliant:** Privacy-focused service
- ✅ **Rate Limiting:** Prevents abuse
- ✅ **Free Tier:** 1000 submissions/month

## ⚙️ Optional: Advanced Configuration
You can customize your Web3Forms settings:

1. **Custom Subject Line:** Already configured in the code
2. **Auto-Reply:** Set up in Web3Forms dashboard
3. **Webhooks:** For advanced integrations
4. **Custom Redirect:** Currently disabled (handled in JS)

## 📞 Support
If you need help with setup:
- Web3Forms Documentation: https://docs.web3forms.com/
- Web3Forms Support: https://web3forms.com/contact

## 🎉 Benefits
- ✅ **Simple Setup:** Just one access key needed
- ✅ **No Dependencies:** No npm packages required
- ✅ **Reliable Delivery:** High deliverability rates
- ✅ **Free Tier:** 1000 submissions/month
- ✅ **Spam Protection:** Built-in filtering
- ✅ **Mobile Optimized:** Works on all devices

## 🚫 Anti-Spam Implementation
The contact form includes several anti-spam measures:

### **Built-in Protection:**
- ✅ **Honeypot field** - Hidden field that traps bots
- ✅ **Custom subject prefix** - `[AMS ElevateX]` for easy filtering
- ✅ **Domain-based sender** - Uses `noreply@amselevatex.com`
- ✅ **Reply-to mapping** - Client email set as reply-to
- ✅ **Rate limiting** - Web3Forms built-in protection

### **Gmail Setup (Recommended):**
1. **Add to Contacts:**
   ```
   notifications@web3forms.com
   noreply@amselevatex.com
   ```

2. **Create Gmail Filter:**
   - Go to Gmail Settings → Filters and Blocked Addresses
   - Create new filter with: `subject:[AMS ElevateX]`
   - Actions: "Never send to Spam" + "Mark as Important"

3. **Additional Gmail Settings:**
   - Enable "Importance markers"
   - Check spam folder initially and mark as "Not Spam"

### **Outlook Setup:**
1. **Safe Senders List:**
   - Add `notifications@web3forms.com`
   - Add `noreply@amselevatex.com`

2. **Create Rule:**
   - Subject contains: `[AMS ElevateX]`
   - Action: Move to Inbox + Mark as Important

### **Domain Authentication (Advanced):**
If you have access to DNS settings for `amselevatex.com`:
- Set up SPF record to include Web3Forms
- Configure DKIM if available
- This significantly improves deliverability

## 🔄 Migration from EmailJS
If you were previously using EmailJS:
- ✅ Web3Forms is simpler (no service/template IDs needed)
- ✅ Better spam protection
- ✅ Higher free tier limit (1000 vs 200 emails)
- ✅ No complex template configuration required
