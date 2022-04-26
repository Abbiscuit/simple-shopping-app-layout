import ProductCard from '../ProductCard'
import type { Product } from '../../../type/product'

type Props = {
  readonly products: Product[]
  readonly onAddToFavorite: (id: string) => void
  readonly isFavorite: (id: string) => boolean
}

function ProductView({ products, onAddToFavorite, isFavorite }: Props) {
  return (
    <section className="px-4 py-4">
      <h2 className="text-2xl font-semibold">関連商品</h2>
      <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-4">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              imgUrl={product.imgUrl}
              description={product.description}
              to={product.to}
              onAddToFavorite={onAddToFavorite}
              isFavorite={isFavorite}
            />
          )
        })}
      </div>
    </section>
  )
}
export default ProductView
