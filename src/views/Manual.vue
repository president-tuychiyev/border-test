<script setup>
import { useThemeStore } from '../stores/theme'
</script>
<template>
    <div class="rounded-xl p-4 mt-5" :class="useThemeStore().isDark ? 'bg-black/50' : 'bg-white'">
        <div class="uppercase text-center font-bold">{{ $t('manual.card1[0]') }}</div>
        <div class="my-3">
            1. {{ $t('manual.card1[1]') }} <i> ({{ $t('manual.card1[2]') }})</i>.
        </div>
    </div>

    <div class="rounded-xl p-4 mt-5" :class="useThemeStore().isDark ? 'bg-black/50' : 'bg-white'">
        <div class="uppercase text-center font-bold">{{ $t('manual.card2[0]') }}</div>
        <div class="my-3">
            {{ $t('manual.card2[1]') }}
        </div>
    </div>

    <div class="rounded-xl p-4 mt-5" :class="useThemeStore().isDark ? 'bg-black/50' : 'bg-white'">
        <div class="uppercase text-center font-bold"> {{ $t('manual.card3[0]') }}</div>
        <div class="my-3">
            {{ $t('manual.card3[1]') }}
        </div>
    </div>
</template>