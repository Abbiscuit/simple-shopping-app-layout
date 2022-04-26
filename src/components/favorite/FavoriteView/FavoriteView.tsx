import { Product } from '../../../type/product'
import FavoriteItem from '../FavoriteItem'

type Props = {
  readonly favoritedProducts: Product[]
  readonly onRemoveFavorite: (id: string) => void
}

function FavoriteView({ favoritedProducts, onRemoveFavorite }: Props) {
  return (
    <section className="px-4 py-4">
      <h2 className="text-2xl font-semibold">お気に入り</h2>
      <div className="mt-4 space-y-4">
        {favoritedProducts.length ? (
          favoritedProducts.map((item) => {
            return (
              <FavoriteItem
                key={item.id}
                item={item}
                onRemoveFavorite={onRemoveFavorite}
              />
            )
          })
        ) : (
          <p>お気に入りのアイテムはありません</p>
        )}
      </div>
    </section>
  )
}
export default FavoriteView
