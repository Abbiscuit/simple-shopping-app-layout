import {
  ArrowDownIcon,
  ArrowUpIcon,
  XCircleIcon,
} from '@heroicons/react/outline'
import { FavoriteItem } from '../../../type/favorite'

type Props = {
  readonly favoriteItems: FavoriteItem[]
  readonly onRemoveFavorite: (id: string) => void
}

function FavoriteView({ favoriteItems, onRemoveFavorite }: Props) {
  return (
    <section className="px-4 py-4">
      <h2 className="text-2xl font-semibold">カート内の商品</h2>
      <div className="mt-4 space-y-4">
        {favoriteItems.length ? (
          favoriteItems.map((item) => {
            return (
              <article
                key={item.id}
                className="items-between flex flex-row space-x-4"
              >
                <img
                  className="h-20 w-20 bg-gray-100 object-cover"
                  src="https://images.unsplash.com/photo-1650784422931-d4cf8f672a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
                <div className="flex flex-col">
                  <div className="flex flex-1 flex-row items-center justify-between">
                    <span>休日の旅セット</span>
                    <span className="text-sm">&yen;12,800</span>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-between">
                    <button
                      onClick={() => onRemoveFavorite(item.id)}
                      aria-label="delete item button"
                    >
                      <XCircleIcon width={20} />
                    </button>
                  </div>
                </div>
              </article>
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
