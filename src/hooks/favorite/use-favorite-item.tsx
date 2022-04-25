import { useState } from 'react'
import { Favorite } from '../../type/favorite'

const tempData: Favorite[] = [
  {
    id: '1',
    imgUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: '最北ツアー',
    to: '/tour-1',
    price: 19800,
  },
  {
    id: '2',
    imgUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: '最北ツアー',
    to: '/tour-2',
    price: 19800,
  },
  {
    id: '3',
    imgUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: '最北ツアー',
    to: '/tour-3',
    price: 19800,
  },
  {
    id: '4',
    imgUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: '最北ツアー',
    to: '/tour-4',
    price: 19800,
  },
]

export const useFavoriteItem = (): {
  favoriteItems: Favorite[]
  unFavoriteItem: (id: string) => void
} => {
  const [favoriteItems, setFavoriteItems] = useState<Favorite[]>(tempData)

  const unFavoriteItem = (id: string): void => {
    setFavoriteItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id)
    })
  }

  return {
    favoriteItems,
    unFavoriteItem,
  }
}
