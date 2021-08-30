import { initTranslations } from 'react-hook-translations';

const translations = initTranslations({
  locales: ['en', 'de'],
  fallback: 'en',
});

export const {
  useLocale,
  makeTranslations,
  TranslationsProvider,
  useRouteTranslations,
} = translations;
