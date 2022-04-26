import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Layout } from '../components/common'
import { ProductCard, ProductView } from '../components/product'
import { addToFavorite } from '../features/product/productSlice'

const HomePage = () => {
  const { products, favoritedProducts } = useAppSelector(
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

  const THIS_WEEK_RECOMMENDATION = products.find((prod) => prod.id === '3')

  return (
    <Layout>
      {THIS_WEEK_RECOMMENDATION && (
        <ProductCard
          id={THIS_WEEK_RECOMMENDATION.id}
          to={THIS_WEEK_RECOMMENDATION.to}
          description={THIS_WEEK_RECOMMENDATION.description}
          imgUrl={THIS_WEEK_RECOMMENDATION.imgUrl}
          onAddToFavorite={handleAddToFavorite}
          isFavorite={isFavorite}
        />
      )}
      <ProductView
        products={products}
        onAddToFavorite={handleAddToFavorite}
        isFavorite={isFavorite}
      />
    </Layout>
  )
}
export default HomePage
