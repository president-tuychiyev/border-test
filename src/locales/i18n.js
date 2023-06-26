import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs'
import oz from './oz.json'
import uz from './uz.json'
import ru from './ru.json'
import en from './en.json'

const messages = { oz: oz, uz: uz, ru: ru, en: en }

const i18n = createI18n({
    locale: JSON.parse(localStorage.getItem('settings')).lang,
    legacy: false,
    fallbackLocale: 'oz',
    messages: messages,
})

export default i18n
