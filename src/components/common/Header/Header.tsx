import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { Link } from '../../ui'

type Props = {
  readonly cartItemCount?: number
  readonly favoriteItemCount?: number
}
function Header({ cartItemCount, favoriteItemCount }: Props) {
  return (
    <header className="flex h-16 flex-row items-center justify-between border-b bg-white px-4">
      <div className="flex flex-1 flex-row gap-x-4">
        <Link
          to="/"
          className="inline-block bg-gray-100 px-4 py-2 text-sm font-semibold"
        >
          Logo
        </Link>
        <Link
          to="/playground"
          className="inline-block bg-gray-100 px-4 py-2 text-sm font-semibold"
        >
          Playground
        </Link>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <Link
          to="/cart"
          className="flex flex-row items-center justify-center px-4 py-2 text-sm font-semibold"
          aria-label={`cart items: ${cartItemCount ?? 0}`}
        >
          <ShoppingCartIcon width={20} />
          {cartItemCount! > 0 && (
            <span className="ml-1 flex w-5 flex-col items-center justify-center rounded-full bg-purple-500 px-1 py-0.5 text-xs text-white">
              {cartItemCount}
            </span>
          )}
        </Link>

        <Link
          to="/favorite"
          className="flex flex-row items-center justify-center px-4 py-2 text-sm font-semibold"
          aria-label={`favorite items: ${favoriteItemCount ?? 0}`}
        >
          <HeartIcon width={20} />
          {favoriteItemCount! > 0 && (
            <span className="ml-1 flex w-5 flex-col items-center justify-center rounded-full bg-purple-500 px-1 py-0.5 text-xs text-white">
              {favoriteItemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
export default Header
