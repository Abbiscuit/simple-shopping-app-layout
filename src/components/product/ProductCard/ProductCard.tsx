import { Link } from '../../ui'

type Props = {
  readonly to: string
  readonly imgUrl: string
  readonly description: string
  readonly alt?: string
}
function ProductCard({ to, imgUrl, description, alt }: Props) {
  return (
    <Link to={to} className="group relative inline-block w-full">
      <img
        className="h-full max-h-60 w-full object-cover"
        src={imgUrl}
        alt={alt ?? ''}
      />
      <div className="absolute inset-x-0 bottom-0 bg-white px-1 transition-colors group-hover:bg-purple-700 group-hover:text-white group-hover:duration-300">
        <span className="text-xs">{description}</span>
      </div>
    </Link>
  )
}
export default ProductCard
