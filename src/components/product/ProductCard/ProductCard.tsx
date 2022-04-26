import { HeartIcon } from '@heroicons/react/outline'
import { Link } from '../../ui'

type Props = {
  readonly to: string
  readonly id: string
  readonly imgUrl: string
  readonly description: string
  readonly alt?: string
  readonly onAddToFavorite: (id: string) => void
  readonly isFavorite: (id: string) => boolean
}
function ProductCard({
  to,
  id,
  imgUrl,
  description,
  alt,
  onAddToFavorite,
  isFavorite,
}: Props) {
  return (
    <div className="group relative inline-block w-full">
      <button
        onClick={() => onAddToFavorite(id)}
        className="absolute top-0 right-0 rounded-bl-sm bg-white bg-opacity-75 px-1 py-1 duration-500 active:bg-opacity-40"
      >
        <HeartIcon color={isFavorite(id) ? 'red' : 'black'} width={20} />
      </button>
      <Link to={to}>
        <img
          className="h-full max-h-60 w-full object-cover"
          src={imgUrl}
          alt={alt ?? ''}
        />
      </Link>
      <div className="absolute inset-x-0 bottom-0 bg-white px-1 transition-colors group-hover:bg-purple-700 group-hover:text-white group-hover:duration-300">
        <span className="text-xs">{description}</span>
      </div>
    </div>
  )
}
export default ProductCard
