import { useAppSelector } from '../app/hooks'
import { CartView } from '../components/cart'
import { Layout } from '../components/common'

type Props = {}
const CartPage = (props: Props) => {
  const { productInCart } = useAppSelector((state) => state.product)

  return (
    <Layout>
      <CartView cartItemCount={productInCart.length} />
    </Layout>
  )
}
export default CartPage
