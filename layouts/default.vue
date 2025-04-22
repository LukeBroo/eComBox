<script setup lang="ts">
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore()
const { toggleMenu } = uiStore
const { isMenuVisible } = storeToRefs(uiStore)
</script>

<template>
  <div>
    <header>
      <ShopNavbar />
    </header>
    <slot />
    <footer>
      <ShopFooter />
    </footer>
    <ShopOverlay v-if="isMenuVisible" @click="toggleMenu" />
  </div>
</template>

<style scoped lang="scss"></style>
