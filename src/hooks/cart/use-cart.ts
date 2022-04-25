import { useState } from 'react'

export const useCart = (): {
  itemCount: number
  addItemToCart: () => void
} => {
  const [itemCount, setItemCount] = useState(2)

  const addItemToCart = () => {
    setItemCount(1)
  }

  return {
    itemCount,
    addItemToCart,
  }
}
