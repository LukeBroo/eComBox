<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="hero__container">
      <span class="hero__label">New Arrival</span>
      <h1 class="hero__title">Discover Our<br />Fake Testowe Itemy</h1>
      <p class="hero__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
        ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <NuxtLink to="/products" class="hero__button">Buy Now</NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  min-height: calc(100vh - 7rem);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-image: url('@/assets/images/scandinavian-interior-mockup-wall-decal-background 1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  &__container {
    max-width: 70rem;
    margin-left: 10%;
    padding: 4rem;
    background-color: rgba($secondary-color, 0.9);
    border-radius: 0.8rem;

    @media (max-width: 768px) {
      margin: 0;
      padding: 3rem;
    }
  }

  &__label {
    display: block;
    font-size: 1.4rem;
    font-weight: 600;
    color: $font-secondary-color;
    margin-bottom: 0.6rem;
    letter-spacing: 0.2rem;
  }

  &__title {
    font-size: 5.2rem;
    font-weight: 600;
    color: $primary-color;
    line-height: 1.4;
    margin-bottom: 2.4rem;

    @media (max-width: 768px) {
      font-size: 3.6rem;
    }
  }

  &__description {
    font-size: 1.6rem;
    line-height: 1.6;
    color: $font-secondary-color;
    margin-bottom: 3.2rem;
    max-width: 54rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  &__button {
    display: inline-block;
    padding: 1.6rem 4rem;
    background-color: $primary-color;
    color: $secondary-color;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 0.2rem;
    transition: background-color 0.6s ease;
  }
}
</style>
