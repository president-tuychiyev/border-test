import { defineStore } from 'pinia'
import i18n from '../locales/i18n'

const settings = JSON.parse(localStorage.getItem('settings'))

export const useLangStore = defineStore('lang', () => {
    const details = reactive({
        lang: settings.lang,
        map: i18n.global.messages.value[settings.lang].map.data
    })

    const setLang = (key, row) => {
        i18n.global.locale.value = row.value
        settings.lang = row.value
        details.lang = row.value
        details.map = i18n.global.messages.value[row.value].map.data
        localStorage.setItem('settings', JSON.stringify(settings))
    }

    return { setLang, details }
})