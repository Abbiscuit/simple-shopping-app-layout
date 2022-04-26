import {
  ArrowDownIcon,
  ArrowUpIcon,
  XCircleIcon,
} from '@heroicons/react/outline'

type Props = {
  readonly cartItemCount: number
}
const CartItem = ({ cartItemCount }: Props) => {
  return (
    <article className="items-between flex flex-row space-x-4">
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
          <button aria-label="delete item button">
            <XCircleIcon width={20} />
          </button>
          <div className="flex flex-row gap-x-2">
            <button className="px-1">
              <ArrowDownIcon width={14} />
            </button>
            <button className="px-1">
              <ArrowUpIcon width={14} />
            </button>
          </div>
          {cartItemCount > 0 && (
            <span className="text-sm">数量:{cartItemCount}</span>
          )}
        </div>
      </div>
    </article>
  )
}
export default CartItem
