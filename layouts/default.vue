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
    <ShopOverlay v-if="isMenuVisible" @click="toggleMenu" />
    <slot />
    <ShopFooter />
  </div>
</template>

<style scoped lang="scss"></style>
