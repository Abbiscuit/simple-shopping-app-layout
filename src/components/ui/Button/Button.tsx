import cn from 'classnames'
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react'

type ButtonProps = ComponentPropsWithRef<'button'> & {
  readonly children: ReactNode
  readonly variant?: 'square' | 'full' | 'default'
  readonly color?: 'dark' | 'primary' | 'secondary' | 'deafult'
  readonly size?: 'default' | 'full'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    variant = 'default',
    color = 'deafult',
    size = 'md',
    ...rest
  } = props

  return (
    <button
      className={cn(
        { ['rounded-none']: variant === 'square' },
        { ['rounded-full']: variant === 'full' },
        { ['rounded']: variant === 'default' },
        { ['bg-gray-100 text-black active:bg-gray-50']: color === 'deafult' },
        {
          ['bg-yellow-300 text-black active:bg-yellow-200']:
            color === 'primary',
        },
        {
          ['bg-pink-500 text-white active:bg-pink-400']: color === 'secondary',
        },
        { ['bg-black text-white active:bg-gray-900']: color === 'dark' },
        { ['w-full']: size === 'full' },
        { ['max-w-min']: size === 'default' },

        'px-6 py-2 text-sm font-semibold shadow'
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  )
})
export default Button
