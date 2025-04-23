<script setup lang="ts">
defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.title" class="product-card__image" />
    <div class="product-card__content">
      <h2 class="product-card__title">{{ product.title }}</h2>
      <p class="product-card__price">{{ product.price }}$</p>
      <NuxtLink :to="`/products/${product.title}`" class="product-card__button"> Details </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

.product-card {
  background: $secondary-color;
  border-radius: 0.8rem;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-0.4rem);
  }

  &__image {
    width: 100%;
    height: 20rem;
    object-fit: contain;
    padding: 1rem;
    background: white;
  }

  &__content {
    padding: 1.6rem;
  }

  &__title {
    @include text-style(1.6rem, 500);
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  &__price {
    @include text-style(1.8rem, 600);
    color: $primary-color;
    margin-bottom: 1.6rem;
  }

  &__button {
    @include text-style(1.4rem, 500);
    display: block;
    text-align: center;
    padding: 1rem;
    background: $primary-color;
    color: $secondary-color;
    border-radius: 0.4rem;
    transition: background-color 0.3s ease;

    &:hover {
      background: color.adjust($primary-color, $lightness: -10%);
    }
  }
}
</style>
