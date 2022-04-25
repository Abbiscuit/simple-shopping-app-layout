import { Layout } from '../components/common'
import { ProductCard, ProductView } from '../components/product'
import { useProducts } from '../hooks/product'

const HomePage = () => {
  const { products } = useProducts()
  return (
    <Layout>
      <ProductCard
        to="/"
        description="今週のおすすめ"
        imgUrl="https://images.unsplash.com/photo-1650784422931-d4cf8f672a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      />
      <ProductView products={products} />
    </Layout>
  )
}
export default HomePage
