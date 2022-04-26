import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../type/product'

const tempData: Product[] = [
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

type ProductState = {
  products: Product[]
  favoritedProducts: Product[]
  productInCart: Product[]
}

const initialState: ProductState = {
  products: tempData,
  favoritedProducts: [],
  productInCart: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<string>) => {
      const targetProd = state.products.find(
        (prod) => prod.id === action.payload
      )

      if (targetProd === undefined) {
        return
      } else {
        const isExist = state.favoritedProducts.some(
          (prod) => prod.id === targetProd.id
        )

        if (isExist) {
          state.favoritedProducts = state.favoritedProducts.filter(
            (prod) => prod.id !== action.payload
          )
        } else {
          state.favoritedProducts.push(targetProd)
        }
      }
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      const targetProd = state.products.find(
        (prod) => prod.id === action.payload
      )

      if (targetProd === undefined) {
        return
      } else {
        const isExist = state.favoritedProducts.some(
          (prod) => prod.id === targetProd.id
        )

        if (isExist) {
          state.favoritedProducts = state.favoritedProducts.filter(
            (prod) => prod.id !== action.payload
          )
        }
      }
    },
  },
})

export const { addToFavorite, removeFromFavorite } = productSlice.actions

export default productSlice.reducer
