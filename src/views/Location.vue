<script setup>
import { Location } from '@vicons/ionicons5'
import GoogleLocation from '../components/GoogleLocation.vue'

</script>
<template>
    <GoogleLocation />

    <div class="my-3 flex justify-center items-center">
        <p class="uppercase font-bold">{{ $t('location.title') }}</p>
        <Location class="w-8 text-orange-500" />
    </div>
    <p> {{ $t('location.content') }} </p>
</template>
