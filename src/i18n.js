// i18n.js
import { createI18n } from 'vue-i18n';

const getUserLocale = () => {
  const userLang = navigator.language || navigator.userLanguage;
  return userLang.split('-')[0];
};

async function loadMessages(locale) {
  try {
    const response = await import(`./locales/${locale}.json`);
    return response.default;
  } catch (error) {
    console.error(`Failed to load messages for locale '${locale}':`, error);

    // Dynamically import emailMissingLocale only when needed
    const { sendEmail } = await import('./scripts/emailMissingLocale');

    // Send an email with the missing locale
    await sendEmail(locale);

    return {}; // Return an empty object in case of failure
  }
}

const i18n = createI18n({
  locale: getUserLocale(),
  fallbackLocale: 'en',
  messages: {},
});

async function setupI18n() {
  const userLocale = getUserLocale();
  const messages = await loadMessages(userLocale);

  i18n.global.setLocaleMessage(userLocale, messages);

  const fallbackLocale = 'en';
  if (userLocale !== fallbackLocale) {
    const fallbackMessages = await loadMessages(fallbackLocale);
    i18n.global.setLocaleMessage(fallbackLocale, fallbackMessages);
  }
}

setupI18n();

export default i18n;
