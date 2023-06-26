<script setup>
import { HomeOutline, MapOutline, LocationOutline, BookOutline } from '@vicons/ionicons5'
const footerMenuOption = [
    {
        label: () => h(RouterLink, { to: { name: 'home' } }, { default: () => '' }),
        key: "home",
        icon: renderIcon(HomeOutline)
    },
    {
        label: () => h(RouterLink, { to: { name: 'map' } }, { default: () => '' }),
        key: "map",
        icon: renderIcon(MapOutline)
    },
    {
        label: () => h(RouterLink, { to: { name: 'location' } }, { default: () => '' }),
        key: "location",
        icon: renderIcon(LocationOutline)
    },
    {
        label: () => h(RouterLink, { to: { name: 'manual' } }, { default: () => '' }),
        key: "manual",
        icon: renderIcon(BookOutline)
    }
]
</script>
<template>
    <n-layout-footer position="absolute" bordered>
        <div class="flex items-center py-2 justify-center">
            <n-menu mode="horizontal" :options="footerMenuOption" />
        </div>
    </n-layout-footer>
</template>