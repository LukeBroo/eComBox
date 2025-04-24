<script setup lang="ts">
const cartStore = useCartStore()
console.log(cartStore.items)

const { items } = storeToRefs(cartStore)
</script>

<template>
  <div class="cart">
    <h1>Shopping Cart</h1>

    <div v-if="!cartStore.items.length" class="cart__empty">Your cart is empty</div>
    <div v-else class="cart__items">
      <div v-for="item in items" :key="item.id" class="cart-item">
        <NuxtImg
          :src="item.image"
          :alt="item.title"
          width="100"
          height="100"
          class="cart-item__image"
        />
        <div class="cart-item__info">
          <h3>{{ item.title }}</h3>
          <p>${{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart {
  padding: 2rem;
  max-width: 80rem;
  margin: 0 auto;

  h1 {
    @include text-style(2.4rem, 600);
    margin-bottom: 2rem;
  }

  &__empty {
    @include text-style(1.6rem, 400);
    text-align: center;
    padding: 2rem;
  }
}

.cart-item {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  border-bottom: 1px solid $secondary-color;

  &__image {
    object-fit: contain;
  }

  &__info {
    h3 {
      @include text-style(1.6rem, 500);
      margin-bottom: 0.5rem;
    }

    p {
      @include text-style(1.4rem, 600);
      color: $primary-color;
    }
  }
}
</style>
