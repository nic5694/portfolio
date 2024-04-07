//import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionary = {
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    fr: () => import('@/dictionaries/fr.json').then((module) => module.default)
}
export const getDictionary = async (locale: Locale) => dictionary[locale]()