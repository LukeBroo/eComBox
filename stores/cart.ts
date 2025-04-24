import { defineStore } from 'pinia'
import type { Product } from '~/types/Products'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[],
  }),
  actions: {
    addItem(product: Product) {
      this.items.push(product)
    },
  },
  persist: true,
})
