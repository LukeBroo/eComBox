import type { Product } from '~/types/Producs'

export const useProducts = () => {
  return useAsyncData<Product[]>('products', () => $fetch('https://fakestoreapi.com/products'))
}
