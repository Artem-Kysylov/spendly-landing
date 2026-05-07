import { getRequestConfig } from 'next-intl/server'
import en from '../locales/en.json'

export default getRequestConfig(async () => {
  return { locale: 'en', messages: en }
})
