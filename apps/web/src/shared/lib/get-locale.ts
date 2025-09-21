import { type Locale } from 'date-fns';
import { enUS } from 'date-fns/locale/en-US';
import { ru } from 'date-fns/locale/ru';

const locales: Record<string, Locale> = { 'en-US': enUS, ru };

export function getLocale(name?: string): Locale {
  const { language } = window.navigator;
  const ensureName = name || language || 'en';
  return locales[ensureName] || ru;
}
