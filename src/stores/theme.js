import { defineStore } from 'pinia'

const settings = JSON.parse(localStorage.getItem('settings'))

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: settings.theme
  }),
  actions: {
    setTheme() {
      if (settings.theme) {
        this.isDark = false
        settings.theme = false
      } else {
        this.isDark = true
        settings.theme = true
      }
      localStorage.setItem("settings", JSON.stringify(settings))
    }
  }
})