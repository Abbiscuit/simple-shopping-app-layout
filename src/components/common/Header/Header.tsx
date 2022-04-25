import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useCart } from '../../../hooks/cart'
import { Link } from '../../ui'

type Props = {}
function Header({}: Props) {
  const { itemCount } = useCart()

  return (
    <header className="flex h-16 flex-row items-center justify-between border-b bg-white px-4">
      <div className="flex-1">
        <Link
          to="/"
          className="inline-block bg-gray-100 px-4 py-2 text-sm font-semibold"
        >
          Logo
        </Link>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <Link
          to="/cart"
          className="flex flex-row items-center justify-center px-4 py-2 text-sm font-semibold"
          aria-label={`cart items: ${itemCount}`}
        >
          <ShoppingCartIcon width={20} />
          {itemCount > 0 && (
            <span className="ml-1 flex w-5 flex-col items-center justify-center rounded-full bg-purple-500 px-1 py-0.5 text-xs text-white">
              {itemCount}
            </span>
          )}
        </Link>
        <Link
          to="/favorite"
          className="flex flex-row items-center justify-center px-4 py-2 text-sm font-semibold"
        >
          <HeartIcon width={20} />
        </Link>
      </div>
    </header>
  )
}
export default Header
