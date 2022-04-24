import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'input'> & {}

function Input({ type, placeholder }: Props) {
  return (
    <input
      className="relative w-full px-2 py-2"
      type={type}
      placeholder={placeholder}
    />
  )
}
export default Input
