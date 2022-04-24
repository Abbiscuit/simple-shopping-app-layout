type Props = {
  readonly imgUrl: string
  readonly alt?: string
  readonly description?: string
}
function ImageButton({ imgUrl, description, alt }: Props): JSX.Element {
  return (
    <button className="flex w-[100px] flex-shrink-0 flex-col items-center rounded px-1 py-1">
      <img
        className="h-full w-full object-cover"
        src={imgUrl}
        alt={alt ?? ''}
      />
      <span className="text-xs font-semibold">{description}</span>
    </button>
  )
}
export default ImageButton
