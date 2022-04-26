import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addToFavorite } from '../../features/product/productSlice'
import { Product } from '../../type/product'

export const useProduct = (): {
  productInCart: Product[]
  products: Product[]
  favoritedProducts: Product[]
  handleAddToFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
} => {
  const { productInCart, products, favoritedProducts } = useAppSelector(
    (state) => state.product
  )
  const dispatch = useAppDispatch()

  const handleAddToFavorite = (id: string) => {
    if (!id) {
      console.log('id not found')
    }
    dispatch(addToFavorite(id))
  }

  const isFavorite = (id: string): boolean => {
    return favoritedProducts.some((prod) => prod.id === id)
  }

  return {
    productInCart,
    products,
    favoritedProducts,
    handleAddToFavorite,
    isFavorite,
  }
}
