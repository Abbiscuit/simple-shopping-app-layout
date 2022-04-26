import { Layout } from '../components/common'
import { ProductSearchView } from '../components/product'

type Props = {}
const ProductPage = (props: Props) => {
  return (
    <Layout>
      <ProductSearchView />
    </Layout>
  )
}
export default ProductPage
