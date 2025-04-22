<script setup lang="ts">
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore()
</script>

<template>
  <div>
    <header>
      <ShopNavbar />
    </header>
    <ShopOverlay v-if="uiStore.isMenuVisible" @click="uiStore.toggleMenu" />
    <slot />
    <ShopFooter />
  </div>
</template>

<style scoped lang="scss"></style>
