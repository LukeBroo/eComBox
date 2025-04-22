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
  padding: 3.2rem 2rem;
  text-align: center;
  border-top: 1px solid $font-secondary-color;

  &__content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 3.2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: left;
    }
  }

  &__section {
    flex: 1 1 300px;
    margin: 1.6rem;

    @media (max-width: 768px) {
      flex: 1 1 100%;
    }
  }

  &__title {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }

  &__text,
  &__list {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  &__social-item {
    margin: 8px 0;
    font-size: 1.2rem;
  }

  &__link {
    &:hover {
      text-decoration: underline;
    }
  }

  &__bottom {
    font-size: 1.2rem;
    border-top: 1px solid #444;
    padding-top: 1rem;
  }
}
</style>
