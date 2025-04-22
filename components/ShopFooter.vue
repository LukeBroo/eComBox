<script setup lang="ts"></script>

<template>
  <footer class="shop-footer">
    <div class="shop-footer__content">
      <div class="shop-footer__section">
        <h3 class="shop-footer__title">About Us</h3>
        <p class="shop-footer__text">Your favorite store to fuck Nuxt.</p>
      </div>
      <div class="shop-footer__section">
        <h3 class="shop-footer__title">Contact</h3>
        <ul class="shop-footer__list">
          <li class="shop-footer__list-item">Email: contact@furniro.com</li>
          <li class="shop-footer__list-item">Phone: +1 123 456 789</li>
        </ul>
      </div>
      <div class="shop-footer__section">
        <h3 class="shop-footer__title">Follow Us</h3>
        <ul class="shop-footer__social-links">
          <li class="shop-footer__social-item">
            <NuxtLink to="#" class="shop-footer__link">Facebook</NuxtLink>
          </li>
          <li class="shop-footer__social-item">
            <NuxtLink to="#" class="shop-footer__link">Instagram</NuxtLink>
          </li>
          <li class="shop-footer__social-item">
            <NuxtLink to="#" class="shop-footer__link">Twitter</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="shop-footer__bottom">
      <p class="shop-footer__copyright">&copy; 2025 Furniro. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.shop-footer {
  background-color: $secondary-color;
  color: $font-primary-color;
  padding: 32px 0;
  text-align: center;

  &__content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 32px;
  }

  &__section {
    flex: 1;
    margin: 16px;
    min-width: 320px;
  }

  &__title {
    font-size: 1.9rem;
    margin-bottom: 16px;
  }

  &__text,
  &__list {
    font-size: 1.4rem;
    line-height: 1.5;
  }

  &__social-item {
    margin: 8px 0;
    font-size: 1.4rem;
  }

  &__link {
    &:hover {
      text-decoration: underline;
    }
  }

  &__bottom {
    font-size: 1.2rem;
    border-top: 1px solid #444;
    padding-top: 16px;
  }
}
</style>
