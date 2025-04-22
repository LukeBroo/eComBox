<script setup lang="ts">
const isMenuVisible = ref(false)

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}

const isDesktop = ref(false)
const checkScreenSize = () => {
  isDesktop.value = window.innerWidth >= 768
  if (isDesktop.value) {
    isMenuVisible.value = false
  }
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<template>
  <div>
    <header class="navbar">
      <div class="navbar__left">
        <img src="@/assets/images/Meubel%20House_Logos-05.svg" alt="Meubel House logo" />
        <span>Furniro</span>
      </div>

      <nav
        v-show="isMenuVisible || isDesktop"
        class="navbar__center"
        :class="{ 'navbar__center--visible': isMenuVisible }"
      >
        <ul class="navbar__menu">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/shop">Shop</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>

        <button class="navbar__close" aria-label="Close menu" @click="toggleMenu">
          <Icon name="material-symbols:close-rounded" size="2.8rem" />
        </button>
      </nav>

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
    </header>
    <slot />
    <footer>Footer</footer>
    <div v-show="isMenuVisible" class="overlay" />
  </div>
</template>

<style lang="scss" scoped>
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

  &__center {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 300px;
    height: 100dvh;
    background-color: white;
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
    padding: 3rem;
    z-index: 2;

    transform: translateX(100%);
    transition: transform 3s ease-in-out;

    &--visible {
      transform: translateX(0);
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }

    li a {
      font-size: 1.4rem;
    }

    @media (min-width: 768px) {
      position: static;
      transform: none;
      height: auto;
      box-shadow: none;
      padding: 0;

      ul {
        flex-direction: row;
        gap: 6rem;
      }
    }

    .navbar__close {
      position: absolute;
      top: 1.2rem;
      right: 1.2rem;
      background: transparent;
      border: none;
      cursor: pointer;

      @media (min-width: 768px) {
        display: none;
      }
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
        all: unset;
        display: none;
      }
    }
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 1;
  pointer-events: none;
}

.navbar__center--visible + .overlay {
  z-index: 1;
}
</style>
