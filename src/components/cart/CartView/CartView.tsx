import CartItem from '../CartItem'

type Props = {
  readonly cartItemCount: number
}

function CartView({ cartItemCount }: Props) {
  return (
    <section className="px-4 py-4">
      <h2 className="text-2xl font-semibold">カート内の商品</h2>
      <div className="mt-4 space-y-4">
        <CartItem cartItemCount={cartItemCount} />
        <CartItem cartItemCount={cartItemCount} />
        <CartItem cartItemCount={cartItemCount} />
        <CartItem cartItemCount={cartItemCount} />
      </div>
    </section>
  )
}
export default CartView
