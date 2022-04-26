import { memo, ReactNode } from 'react'
import { useAppSelector } from '../../../app/hooks'
import Header from '../Header'

type LayoutProps = {
  readonly children: ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
  const { productInCart, favoritedProducts } = useAppSelector(
    (state) => state.product
  )

  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50">
      <div className="sticky top-0">
        <Header
          favoriteItemCount={favoritedProducts.length}
          cartItemCount={productInCart.length}
        />
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default memo(Layout)
