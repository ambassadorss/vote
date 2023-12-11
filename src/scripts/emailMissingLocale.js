// emailMissingLocale.js
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'default_service';
const TEMPLATE_ID = 'template_suarf0a';
const USER_ID = 'ifC_sHCZJ3t6dov7T';

export const sendEmail = async function (missingLocale) {
  emailjs.init(USER_ID);

  const emailParams = {
    email: 'shedrackgodstime@gmail.com',
    message: `Missing locale: ${missingLocale}`,
  };

  try {
    // Assuming you have an email template set up with the specified SERVICE_ID and TEMPLATE_ID
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Failed to send email:', error);
  }
};
