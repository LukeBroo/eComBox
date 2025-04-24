import type { Product } from '~/types/Products'

export const useProducts = () => {
  return useAsyncData<Product[]>('products', () => $fetch('https://fakestoreapi.com/products'))
}
