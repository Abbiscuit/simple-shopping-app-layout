import ProductCard from '../ProductCard'
import type { Product } from '../../../type/product'
import { Link } from '../../ui'

type Props = {
  readonly products: Product[]
  readonly onAddToFavorite: (id: string) => void
  readonly isFavorite: (id: string) => boolean
}

function ProductView({ products, onAddToFavorite, isFavorite }: Props) {
  return (
    <section className="px-4 py-4">
      <div className="flex flex-row items-center">
        <h2 className="flex-1 text-2xl font-semibold">関連商品</h2>
        <Link to="/product" className="px-1 py-1 text-sm text-gray-600">
          全て表示
        </Link>
      </div>
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
