<script setup lang="ts">
const isMenuVisible = ref(false)

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}
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
