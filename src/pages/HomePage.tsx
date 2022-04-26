import { Layout } from '../components/common'
import { ProductCard, ProductView } from '../components/product'
import { useProduct } from '../hooks/product'

const HomePage = () => {
  const { products, handleAddToFavorite, isFavorite } = useProduct()

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
