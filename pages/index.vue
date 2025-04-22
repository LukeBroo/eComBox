<script setup lang="ts">
const heroContent = {
  label: 'New Arrival',
  title: 'Discover Our',
  subtitle: 'Fake Testowe Itemy',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  buttonText: 'Buy Now',
  buttonLink: '/products',
}
</script>

<template>
  <section class="hero">
    <div class="hero__container">
      <span class="hero__label">{{ heroContent.label }}</span>
      <h1 class="hero__title">{{ heroContent.title }}<br />{{ heroContent.subtitle }}</h1>
      <p class="hero__description">{{ heroContent.description }}</p>
      <NuxtLink :to="heroContent.buttonLink" class="hero__button">
        {{ heroContent.buttonText }}
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
@mixin text-style($size, $weight) {
  font-size: $size;
  font-weight: $weight;
}

.hero {
  min-height: calc(100vh - 7rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: url('@/assets/images/scandinavian-interior-mockup-wall-decal-background 1.png')
    center/cover no-repeat;

  @media (min-width: $mobile-breakpoint) {
    justify-content: flex-start;
  }

  &__container {
    max-width: 70rem;
    margin: 0;
    padding: 3rem;
    background-color: rgba($secondary-color, 0.9);
    border-radius: 0.8rem;

    @media (min-width: $mobile-breakpoint) {
      margin-left: 10%;
      padding: 4rem;
    }
  }

  &__label {
    @include text-style(1.4rem, 600);
    display: block;
    color: $font-secondary-color;
    margin-bottom: 0.6rem;
    letter-spacing: 0.2rem;
  }

  &__title {
    @include text-style(3.6rem, 600);
    color: $primary-color;
    line-height: 1.4;
    margin-bottom: 2.4rem;

    @media (min-width: $mobile-breakpoint) {
      font-size: 5.2rem;
    }
  }

  &__description {
    @include text-style(1.4rem, 400);
    line-height: 1.6;
    color: $font-secondary-color;
    margin-bottom: 3.2rem;
    max-width: 50rem;

    @media (min-width: $mobile-breakpoint) {
      font-size: 1.6rem;
    }
  }

  &__button {
    @include text-style(1.6rem, 600);
    display: inline-block;
    padding: 1.6rem 4rem;
    background-color: $primary-color;
    color: $secondary-color;
    border-radius: 0.2rem;
    transition: all 0.4s ease;

    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
}
</style>
