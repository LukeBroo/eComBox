<script setup lang="ts">
const { data: products, pending: loading, error: error } = useProducts()
</script>

<template>
  <section class="products">
    <h1 class="products__title">Products</h1>

    <div v-if="loading" class="products__loading">Loading...</div>
    <div v-else-if="error" class="products__error">
      Oops! Something went wrong: {{ error.message }}
    </div>
    <div v-else class="products__grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.title" class="product-card__image" />
        <div class="product-card__content">
          <h2 class="product-card__title">{{ product.title }}</h2>
          <p class="product-card__price">{{ product.price }}$</p>
          <NuxtLink :to="`/products/${product.title}`" class="product-card__button">
            Details
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use 'sass:color';

.products {
  padding: 2rem;
  max-width: 120rem;
  margin: 0 auto;

  @media (min-width: $mobile-breakpoint) {
    padding: 4rem 2rem;
  }

  &__title {
    @include text-style(2.8rem, 600);
    text-align: center;
    margin-bottom: 2rem;

    @media (min-width: $mobile-breakpoint) {
      font-size: 3.2rem;
      margin-bottom: 4rem;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 2rem;
  }

  &__loading,
  &__error {
    @include text-style(1.6rem, 500);
    text-align: center;
    padding: 2rem;
  }
}

.product-card {
  background: $secondary-color;
  border-radius: 0.8rem;
  overflow: hidden;
  transition: transform 0.3s ease;

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
