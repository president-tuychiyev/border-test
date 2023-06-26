<script setup>
import { useThemeStore } from '../stores/theme'
</script>

<template>
    <div class="rounded-xl p-4" :class="useThemeStore().isDark ? 'bg-black/50' : 'bg-white'">
        <div class="uppercase text-center font-bold">O‘zbekistonliklar qaysi davlatlarga vizasiz borishi mumkin?</div>
        <div class="my-3">Henley & Partners kompaniyasi har yili e’lon qilinuvchi xalqaro pasportlar indeksini
            <a class="text-blue-600" href="https://ru.henleyglobal.com/passportindex">yangiladi.</a>
        </div>
        <p>
            Ushbu indeks mamlakatlarning o‘z fuqarolariga taqdim etadigan o‘tib yurish erkinligi darajasi bo‘yicha
            reytingdir. Kompaniya barcha mamlakat va hududlarning viza rejimi qoidalarini o‘rganib chiqib, har bir mamlakat
            fuqarolari nechta mamlakatga viza rasmiylashtirmasdan turib tashrif buyura olishini aniqlaydi.

            O‘zbekiston 2020-yilda avvalgi yangilanish bilan solishtirganda 5 pog‘ona pastlab 85-o‘rinni egalladi. Hozirda
            respublika fuqarolari 57 ta davlatga vizasiz borishlari mumkin.

            Pasportlar reytingida Yaponiya yetakchilik qildi. Ushbu davlat fuqarolari vizani oldindan rasmiylashtirmasdan
            turib 191 mamlakatga bora oladi. Ikkinchi o‘rinni 190 mamlakatga bora olish imkoniyati bilan Singapur, uchinchi
            o‘rinni 189 mamlakat bilan Germaniya va Janubiy Koreya egalladi.
        </p>
        <div class="uppercase text-center font-bold mt-5">Quyida O‘zbekiston fuqarolari vizasiz borishi mumkin bo‘lgan
            davlatlar
            ro‘yxati keltirildi:
        </div>
        Osiyo
        <ul class="list-disc pl-8">
            <li>Qozog‘iston</li>
            <li>Qirg‘iziston</li>
            <li>Tojikiston</li>
            <li>Indoneziya</li>
            <li>Malayziya</li>
            <li>Filippin</li>
            <li>Turkiya</li>
            <li>Turkiya</li>
        </ul>
        Yevropa
        <ul class="list-disc pl-8">
            <li>Belarus</li>
            <li>Moldova</li>
            <li>Rossiya</li>
            <li>Ukraina</li>
            <li>Armaniston</li>
            <li>Ozarbayjon</li>
            <li>Gruziya</li>
            <li>Afrika</li>
            <li>Namibiya</li>
            <li>Namibiya</li>
        </ul>
        Okeaniya
        Kuk orollari
        Mikroneziya
        Niue
        Karib havzasi
        Antigua va Barbuda
        Barbados
        Dominika
        Gaiti
        Sent-Vinsent va Grenadinlar
        Amerika
        Ekvador
        Quyidagi davlatlarga borgandan keyin viza ochiladi:
        Eron
        Iordaniya
        Livan
        Suriya
        Kambodja
        Laos
        Makao
        Maldiv
        Nepal
        Shri-Lanka
        Tailand
        Sharqiy Timor
        Kabo-Verde orollari
        Komor orollari
        Gvineya-Bisau
        Keniya
        Madagaskar
        Mavritaniya
        Mavrikiy
        Mozambik
        Ruanda
        Senegal
        Seyshell
        Somali
        Togo
        Uganda
        Zimbabve
        Palau orollari
        Samoa
        Tuvalu
        Yamayka
        Boliviya
        Nikaragua
    </div>
</template>