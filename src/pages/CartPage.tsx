import { CartView } from '../components/cart'
import { Layout } from '../components/common'
import { useCart } from '../hooks/cart'

type Props = {}
const CartPage = (props: Props) => {
  const { itemCount } = useCart()
  return (
    <Layout>
      <CartView itemCount={itemCount} />
    </Layout>
  )
}
export default CartPage
