import type { Product } from '~/types/Products'

export const useProducts = () => {
  return useAsyncData<Product[]>('products', () => $fetch('https://fakestoreapi.com/products'))
}

export const useProduct = (slug: string) => {
  const { data: products } = useProducts()

  const product = computed(() =>
    products.value?.find((p) => p.title.toLowerCase() === slug.toLowerCase())
  )

  return {
    product,
    loading: computed(() => !products.value),
  }
}
