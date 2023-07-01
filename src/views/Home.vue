<script setup>
import { useThemeStore } from '../stores/theme'
</script>

<template>
  <n-scrollbar class="h-[80vh]">
    <div class="rounded-xl p-4 my-5" :class="useThemeStore().isDark ? 'bg-black/50' : 'bg-white'">
      <div class="uppercase text-center font-bold">{{ $t('home.card1[0]') }}</div>
      <div class="mt-2">{{ $t('home.card1[1]') }}</div>
    </div>

    <div class="rounded-xl p-4 my-5" :class="useThemeStore().isDark ? 'bg-black/50' : 'bg-white'">
      <div class="uppercase text-center font-bold">{{ $t('home.card2[0]') }}</div>
      <div class="my-3">{{ $t('home.card2[1]') }}
        <a class="text-blue-600" href="https://ru.henleyglobal.com/passportindex">{{ $t('home.card2[2]') }}.</a>
        <br>
        <i>({{ $t('home.card2[3]') }})</i>
      </div>
      <div class="flex justify-end">
        <a href="https://daryo.uz/2020/01/08/ozbekistonliklar-qaysi-davlatlarga-vizasiz-borishi-mumkin/?id=1028974"
          target="_blank">
          <n-button>{{ $t('home.card2[4]') }}</n-button>
        </a>
      </div>
    </div>

    <div class="rounded-xl p-4 mt-5" :class="useThemeStore().isDark ? 'bg-black/50' : 'bg-white'">
      <div class="uppercase text-center font-bold">{{ $t('home.card3[0]') }}</div>
      <div class="my-3">
        {{ $t('home.card3[1]') }}
        <br>
        <i>({{ $t('home.card3[2]') }})</i>
      </div>
      <div class="flex justify-end">
        <a href="https://kun.uz/uz/24029368" target="_blank">
          <n-button>{{ $t('home.card3[3]') }}</n-button>
        </a>
      </div>
    </div>
  </n-scrollbar>
</template>