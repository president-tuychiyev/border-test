<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useMessage, darkTheme } from 'naive-ui'
import { useThemeStore } from './stores/theme'

window.useMessage = useMessage()
</script>
<template>
  <n-config-provider :theme="useThemeStore().isDark ? darkTheme : null">
    <n-layout class="h-screen">
      <Navbar />

      <n-layout class="p-6 h-screen absolute w-full" :native-scrollbar="false"
        :class="useThemeStore().isDark ? '' : 'bg-gray-100'">
        <router-view v-slot="{ Component }">
          <Transition enter-from-class="opacity-0" enter-active-class="transition duration-500">
            <div>
              <component :is="Component" />
            </div>
          </Transition>
        </router-view>
      </n-layout>

      <Footer />
    </n-layout>
  </n-config-provider>
</template>
