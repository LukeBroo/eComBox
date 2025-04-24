<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useUiStore } from '@/stores/ui'

interface NavLink {
  name: string
  path: string
}

const navigationLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/#' },
  { name: 'Contact', path: '/#' },
]

const navIcons = [
  { name: 'Search', icon: 'material-symbols:search', path: '#' },
  { name: 'Favorites', icon: 'material-symbols:favorite-outline-rounded', path: '#' },
  { name: 'Cart', icon: 'material-symbols:shopping-cart-outline', path: '/cart' },
]

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
        <li v-for="link in navigationLinks" :key="link.path">
          <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Mobile menu -->
    <transition name="slide">
      <nav v-show="isMenuVisible && !isDesktop" class="navbar__mobile">
        <button class="navbar__close" aria-label="Close menu" @click="toggleMenu">
          <Icon name="material-symbols:close-rounded" size="2.8rem" />
        </button>
        <ul>
          <li v-for="link in navigationLinks" :key="link.path">
            <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </transition>

    <div class="navbar__right">
      <button v-for="icon in navIcons" :key="icon.name" :aria-label="icon.name">
        <NuxtLink :to="icon.path">
          <Icon :name="icon.icon" size="2.8rem" />
        </NuxtLink>
      </button>
      <button class="navbar__toggle" aria-label="Toggle menu" @click="toggleMenu">
        <Icon name="material-symbols:menu-rounded" size="2.8rem" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  }

  &__toggle {
    display: block;

    @media (min-width: $mobile-breakpoint) {
      display: none;
    }
  }

  &__desktop {
    display: none;

    @media (min-width: $mobile-breakpoint) {
      display: flex;
      justify-content: center;

      ul {
        display: flex;
        gap: 6rem;
      }

      li a {
        font-size: 1.4rem;
        transition: color 0.3s ease;

        &:hover {
          color: $primary-color;
        }
      }
    }
  }

  &__mobile {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 30rem;
    height: 100dvh;
    background: $secondary-color;
    z-index: 10;
    padding: 3rem;
    box-shadow: -4px 0 10px rgba($font-primary-color, 0.1);

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }

    li a {
      font-size: 1.4rem;
    }
  }
  &__close {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
}

.slide {
  &-enter-active,
  &-leave-active {
    transition: transform 0.6s ease;
  }

  &-enter-from {
    transform: translateX(200%);
  }

  &-leave-to {
    transform: translateX(100%);
  }
}
</style>
