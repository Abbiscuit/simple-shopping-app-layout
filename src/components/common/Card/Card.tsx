import cn from 'classnames'
import { ComponentPropsWithoutRef, createElement } from 'react'

type TagName = 'div' | 'article'

type Props<T extends TagName> = ComponentPropsWithoutRef<T> & {
  readonly as?: T
  readonly className?: string
  readonly title?: string
  readonly imgUrl?: string
  readonly description?: string
  readonly buttonLabel?: string
}

function Card<T extends TagName>(props: Props<T>): JSX.Element {
  const {
    as = 'div',
    className,
    title,
    imgUrl,
    description,
    buttonLabel,
    ...rest
  } = props

  return createElement(
    as,
    {
      className: cn('', className),
      ...rest,
    },
    <>
      {imgUrl && <img className="h-40 w-full object-cover" src={imgUrl}></img>}
      <div className="px-4 py-4">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && (
          <p className="mt-2 text-sm leading-relaxed">{description}</p>
        )}
      </div>
      <div className="px-2 py-2">
        {buttonLabel && (
          <button className="bg-purple-500 px-6 py-2 text-sm text-white">
            {buttonLabel}
          </button>
        )}
      </div>
    </>
  )
}
export default Card
