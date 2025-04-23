<script setup lang="ts">
const route = useRoute()
const { product, loading } = useProduct(route.params.slug as string)
</script>

<template>
  <section class="product-details">
    <div v-if="loading" class="product-details__loading">Loading...</div>

    <div v-else-if="!product" class="product-details__error">Product not found</div>

    <div v-else class="product-details__content">
      <div class="product-details__image-wrapper">
        <img :src="product.image" :alt="product.title" class="product-details__image" />
      </div>

      <div class="product-details__info">
        <h1 class="product-details__title">{{ product.title }}</h1>
        <p class="product-details__price">{{ product.price }}$</p>
        <p class="product-details__description">{{ product.description }}</p>
        <div class="product-details__meta">
          <span class="product-details__category"> Category: {{ product.category }} </span>
          <div class="product-details__rating">
            Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)
          </div>
        </div>

        <button class="product-details__button">Add to Cart</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use 'sass:color';

.product-details {
  padding: 2rem;
  max-width: 120rem;
  margin: 0 auto;

  @media (min-width: $mobile-breakpoint) {
    padding: 4rem 2rem;
  }

  &__loading,
  &__error {
    @include text-style(1.6rem, 500);
    text-align: center;
    padding: 2rem;
  }

  &__content {
    display: grid;
    gap: 3rem;

    @media (min-width: $mobile-breakpoint) {
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
    }
  }

  &__image-wrapper {
    background: white;
    padding: 2rem;
    border-radius: 0.8rem;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__title {
    @include text-style(2.8rem, 600);
    line-height: 1.4;
  }

  &__price {
    @include text-style(2.4rem, 600);
    color: $primary-color;
  }

  &__description {
    @include text-style(1.6rem, 400);
    line-height: 1.6;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @include text-style(1.4rem, 500);
    color: rgba($font-primary-color, 0.8);
  }

  &__button {
    @include text-style(1.6rem, 500);
    padding: 1.6rem;
    background: $primary-color;
    color: $secondary-color;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background: color.adjust($primary-color, $lightness: -10%);
    }
  }
}
</style>
