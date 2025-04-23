export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export const useProducts = () => {
  return useAsyncData<Product[]>('products', () => $fetch('https://fakestoreapi.com/products'))
}
