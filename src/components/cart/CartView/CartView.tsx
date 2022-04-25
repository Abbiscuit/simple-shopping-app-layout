import CartItem from '../CartItem'

type Props = {
  readonly itemCount: number
}

function CartView({ itemCount }: Props) {
  return (
    <section className="px-4 py-4">
      <h2 className="text-2xl font-semibold">カート内の商品</h2>
      <div className="mt-4 space-y-4">
        <CartItem itemCount={itemCount} />
        <CartItem itemCount={itemCount} />
        <CartItem itemCount={itemCount} />
        <CartItem itemCount={itemCount} />
      </div>
    </section>
  )
}
export default CartView
