<script setup>
import { AlbumsOutline, BookmarkOutline, InvertMode, LocationOutline } from '@vicons/ionicons5'
import { useLangStore } from '../stores/lang';
import { useThemeStore } from '../stores/theme'

</script>
<template>
    <p class="text-center uppercase font-bold mb-2">{{ $t('map.title') }}</p>
    <n-scrollbar class="h-[80vh]">
        <div v-for="item in useLangStore().details.map">
            <n-tag type="warning" class="justify-center flex rounded-md">{{ item.tag }}</n-tag>
            <small>{{ item.text }} (Manbaa: <a class="text-blue-500" :href="item.link" target="_blank"
                    rel="noopener noreferrer">{{
                        item.source }}</a>)</small>
            <n-collapse class="my-3 py-3 px-2 rounded-xl" :class="useThemeStore().isDark ? 'bg-black/30' : 'bg-white'">
                <n-collapse-item v-for="child in item.children" :title="child.title" :name="child.title">
                    <div class="flex items-center ml-3 mb-2">
                        <n-icon :size="20">
                            <AlbumsOutline />
                        </n-icon>
                        <span class="font-bold ml-2">{{ $t('map.details[0]') }}:</span>
                        <n-tag type="success" class="ml-2">{{ child.title }}</n-tag>
                    </div>
                    <div class="flex items-center ml-3 mb-2">
                        <n-icon :size="20">
                            <BookmarkOutline />
                        </n-icon>
                        <span class="font-bold ml-2">{{ $t('map.details[1]') }}:</span>
                        <n-tag type="success" class="ml-2">{{ child.status }}</n-tag>
                    </div>
                    <div class="flex items-center ml-3 mb-2">
                        <n-icon :size="20">
                            <InvertMode />
                        </n-icon>
                        <span class="font-bold ml-2">{{ $t('map.details[2]') }}:</span>
                        <n-tag type="success" class="ml-2">{{ child.mode }}</n-tag>
                    </div>
                    <div class="flex items-center ml-3">
                        <n-icon :size="20">
                            <LocationOutline />
                        </n-icon>
                        <span class="font-bold ml-2">{{ $t('map.details[3]') }}:</span>
                        <n-tag type="success" class="ml-2">{{ child.adderess }}</n-tag>
                    </div>
                </n-collapse-item>
            </n-collapse>

            <n-divider />
        </div>
    </n-scrollbar>
</template>