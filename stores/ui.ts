import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('uiView', () => {
  const isMenuVisible = ref(false)
  const isDesktop = ref(false)

  const toggleMenu = (): void => {
    isMenuVisible.value = !isMenuVisible.value
  }

  const checkScreenSize = (): void => {
    isDesktop.value = window.innerWidth >= 768
    if (isDesktop.value) {
      isMenuVisible.value = false
    }
  }

  return {
    isMenuVisible,
    isDesktop,
    toggleMenu,
    checkScreenSize,
  }
})
