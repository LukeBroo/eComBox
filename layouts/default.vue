<script setup lang="ts"></script>

<template>
  <div>
    <header class="navbar">
      <div class="navbar__left">
        <img src="@/assets/images/Meubel%20House_Logos-05.svg" alt="Meubel House logo" />
        <span>Furniro</span>
      </div>

      <nav class="navbar__center">
        <ul class="navbar__menu">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/shop">Shop</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>

      <div class="navbar__right">
        <button aria-label="Search"><Icon name="material-symbols:search" /></button>
        <button aria-label="Favorites"><Icon name="material-symbols:favorite" /></button>
        <button aria-label="Cart"><Icon name="material-symbols:shopping-cart" /></button>
        <button class="navbar__toggle" aria-label="Toggle menu">
          <Icon name="material-symbols:menu-rounded" />
        </button>
      </div>
    </header>
    <slot />
    <footer>Footer</footer>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins';

  &__left {
    display: flex;
    align-items: center;

    span {
      font-size: 3.4rem;
      font-weight: 600;
    }
  }
}
</style>
