<script setup>
import { useThemeStore } from '../stores/theme'
</script>

<template>
  <n-scrollbar class="h-[80vh]">
    <div class="rounded-xl p-4 my-5" :class="useThemeStore().isDark ? 'bg-black/50' : 'bg-white'">
      <div class="uppercase text-center font-bold">{{ $t('home.card2[0]') }}</div>
      <div class="mt-2">{{ $t('home.card2[1]') }}</div>
    </div>

    <div class="rounded-xl p-4 my-5" :class="useThemeStore().isDark ? 'bg-black/50' : 'bg-white'">
      <div class="uppercase text-center font-bold">O‘zbekistonliklar qaysi davlatlarga vizasiz borishi mumkin?</div>
      <div class="my-3">Henley & Partners kompaniyasi har yili e’lon qilinuvchi xalqaro pasportlar indeksini
        <a class="text-blue-600" href="https://ru.henleyglobal.com/passportindex">yangiladi.</a>
        <br>
        <i>(Manbaa: daryo.uz)</i>
      </div>
      <div class="flex justify-end">
        <a href="https://daryo.uz/2020/01/08/ozbekistonliklar-qaysi-davlatlarga-vizasiz-borishi-mumkin/?id=1028974"
          target="_blank">
          <n-button>Batafsil</n-button>
        </a>
      </div>
    </div>

    <div class="rounded-xl p-4 mt-5" :class="useThemeStore().isDark ? 'bg-black/50' : 'bg-white'">
      <div class="uppercase text-center font-bold">Qaysi davlat fuqarolari O‘zbekistonga vizasiz kirish imkoniga ega?
      </div>
      <div class="my-3">2018 yilning 10 fevralidan soddalashtirilgan viza rejimi amalda qo‘llanuvchi mamlakatlar ro‘yxati
        bilan tanishishingiz mumkin.
        <br>
        <i>(Manbaa: kun.uz)</i>
      </div>
      <div class="flex justify-end">
        <a href="https://kun.uz/uz/24029368" target="_blank">
          <n-button>Batafsil</n-button>
        </a>
      </div>
    </div>
  </n-scrollbar>
</template>