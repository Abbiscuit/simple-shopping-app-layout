import { XCircleIcon } from '@heroicons/react/outline'
import { Product } from '../../../type/product'

type Props = {
  readonly item: Product
  readonly onRemoveFavorite: (id: string) => void
}
function FavoriteItem({ item, onRemoveFavorite }: Props): JSX.Element {
  return (
    <article className="items-between flex flex-row space-x-4">
      <img
        className="h-20 w-20 bg-gray-100 object-cover"
        src={item.imgUrl}
        alt=""
      />
      <div className="flex flex-col">
        <div className="flex flex-1 flex-row items-center justify-between">
          <span>{item.description}</span>
          <span className="text-sm">&yen;{item.price}</span>
        </div>
        <div className="flex flex-1 flex-row items-center justify-between">
          <button
            onClick={() => onRemoveFavorite(item.id)}
            aria-label="delete item button"
          >
            <div className="flex flex-row items-center">
              <XCircleIcon width={20} />
              <span className="ml-2 text-sm text-purple-600">
                お気に入りから削除
              </span>
            </div>
          </button>
        </div>
      </div>
    </article>
  )
}
export default FavoriteItem
