<script setup>
import { MenuSharp, InformationCircleOutline, ShieldCheckmarkOutline, MoonOutline, SunnyOutline, Language, AccessibilityOutline } from '@vicons/ionicons5'
import { useThemeStore } from '../stores/theme'
import { useLangStore } from '../stores/lang'
import i18n from '../locales/i18n'

const sideMenuOption = [
    {
        label: () => h("span", { onClick: () => { details.side = false; details.showModalSecurity = true } }, i18n.global.t("side.menu.security")),
        key: "security",
        icon: renderIcon(ShieldCheckmarkOutline)
    },
    {
        label: () => h("span", { onClick: () => { details.side = false; details.showModalAbout = true } }, i18n.global.t("side.menu.about")),
        key: "about",
        icon: renderIcon(InformationCircleOutline)
    },
    {
        label: () => h("span", { onClick: () => { details.side = false; details.showModalPossibility = true } }, i18n.global.t("side.menu.possibility")),
        key: "possibility",
        icon: renderIcon(AccessibilityOutline)
    }
]
const langs = [
    {
        label: 'O‘zbekcha',
        value: 'oz'
    },
    {
        label: 'Ўзбекча',
        value: 'uz'
    },
    {
        label: 'Русский',
        value: 'ru'
    },
    {
        label: 'English',
        value: 'en'
    },
]
const details = reactive({
    side: false,
    sideValue: null,
    showModalSecurity: false,
    showModalAbout: false,
    showModalPossibility: false,
    theme: JSON.parse(localStorage.getItem('settings')).theme ? true : false
})
</script>
<template>
    <n-layout-header style="height: 64px;" bordered class="drop-shadow-2xl">
        <div class="flex items-center justify-between h-full mx-3">
            <img src="../components/icons/logo.png" class="w-12">
            <div class="flex items-center">
                <n-switch :default-value="details.theme" @update:value="useThemeStore().setTheme()" size="large"
                    :rail-style="() => { return { boxShadow: '0 0 0 0' } }" class="mr-3">
                    <template #checked-icon>
                        <n-icon :component="MoonOutline" />
                    </template>
                    <template #unchecked-icon>
                        <n-icon :component="SunnyOutline" />
                    </template>
                </n-switch>
                <n-dropdown trigger="hover" :options="langs" @select="useLangStore().setLang">
                    <n-button size="large" strong secondary circle type="success" class="mr-2"
                        :class="useThemeStore().isDark ? 'bg-slate-500/20' : 'bg-gray-100'">
                        <template #icon>
                            <n-icon :component="Language" />
                        </template>
                    </n-button>
                </n-dropdown>
                <n-button size="large" strong secondary circle type="success"
                    :class="useThemeStore().isDark ? 'bg-slate-500/20' : 'bg-gray-100'"
                    @click="details.side = !details.side">
                    <template #icon>
                        <n-icon :component="MenuSharp" />
                    </template>
                </n-button>
            </div>
        </div>
    </n-layout-header>

    <n-drawer v-model:show="details.side" drawer-clas="p-0" resizable placement="left">
        <n-drawer-content body-content-style="padding: 0px;">
            <template #header>
                <div class="flex items-center">
                    <img src="../components/icons/logo.png" class="w-12">
                    <small class="ml-4">{{ $t('side.title') }}</small>
                </div>
            </template>
            <n-menu :options="sideMenuOption" />
        </n-drawer-content>
    </n-drawer>

    <n-modal v-model:show="details.showModalSecurity" :mask-closable="false" preset="dialog"
        :title="$t('side.menu.security')">
        <n-p>
            {{ $t('side.securityText[0]') }}
            <hr>
            {{ $t('side.securityText[1]') }}
        </n-p>
    </n-modal>

    <n-modal v-model:show="details.showModalAbout" :mask-closable="false" preset="dialog" :title="$t('side.menu.about')">
        <n-p>
            {{ $t('side.aboutText[0]') }}
            <hr>
            {{ $t('side.aboutText[1]') }}
        </n-p>
    </n-modal>

    <n-modal v-model:show="details.showModalPossibility" :mask-closable="false" preset="dialog"
        :title="$t('side.menu.possibility')">
        <n-p>
            <n-tag type="success" class="mr-1 uppercase">{{ $t('home.card1[0]') }}: </n-tag>{{ $t('home.card1[1]') }}
            <br>
            <n-tag type="success" class="mt-3 mr-1 uppercase">{{ $t('home.card1[2]') }}: </n-tag>{{ $t('home.card1[3]') }}
        </n-p>
    </n-modal>
</template>