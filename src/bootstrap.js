import { h, ref, reactive, onMounted, computed } from 'vue'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'

window.h = h
window.ref = ref
window.reactive = reactive
window.onMounted = onMounted
window.computed = computed
window.RouterLink = RouterLink

window.renderIcon = (icon) => {
    return () => h(NIcon, null, { default: () => h(icon) });
}

if (!window.localStorage.getItem('settings')) {
    window.localStorage.setItem('settings', JSON.stringify({
        theme: false,
        lang: 'uz',
        sideBarCollapsed: false
    }))
}

