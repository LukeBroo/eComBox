<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore()
const { checkScreenSize, toggleMenu } = uiStore
const { isMenuVisible, isDesktop } = storeToRefs(uiStore)

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<template>
  <div class="navbar">
    <div class="navbar__left">
      <img src="@/assets/images/Meubel%20House_Logos-05.svg" alt="Mebel House logo" />
      <span>Furniro</span>
    </div>

    <!-- Desktop nav -->
    <nav v-if="isDesktop" class="navbar__desktop">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>

    <!-- Mobile menu -->
    <transition name="slide">
      <nav v-show="isMenuVisible && !isDesktop" class="navbar__mobile">
        <button class="navbar__close" aria-label="Close menu" @click="toggleMenu">
          <Icon name="material-symbols:close-rounded" size="2.8rem" />
        </button>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </transition>

    <div class="navbar__right">
      <button aria-label="Search"><Icon name="material-symbols:search" size="2.8rem" /></button>
      <button aria-label="Favorites">
        <Icon name="material-symbols:favorite-outline-rounded" size="2.8rem" />
      </button>
      <button aria-label="Cart">
        <Icon name="material-symbols:shopping-cart-outline" size="2.8rem" />
      </button>
      <button class="navbar__toggle" aria-label="Toggle menu" @click="toggleMenu">
        <Icon name="material-symbols:menu-rounded" size="2.8rem" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Header
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0.6rem;

  &__left {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: 3rem;
      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
      cursor: default;
    }
  }

  &__right {
    display: flex;
    gap: 1.6rem;
    margin: 0 0.6rem;

    button {
      cursor: pointer;
    }

    .navbar__toggle {
      display: block;

      @media (min-width: 768px) {
        display: none;
      }
    }
  }

  &__desktop {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;

      ul {
        display: flex;
        gap: 6rem;
      }

      li a {
        font-size: 1.4rem;
      }
    }
  }

  &__mobile {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 300px;
    height: 100dvh;
    background: white;
    z-index: 10;
    padding: 3rem;
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }

    li a {
      font-size: 1.4rem;
    }

    .navbar__close {
      position: absolute;
      top: 1.2rem;
      right: 1.2rem;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
}

// Transition component
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s ease;
}
.slide-enter-from {
  transform: translateX(200%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
