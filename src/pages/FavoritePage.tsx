import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Layout } from '../components/common'
import { FavoriteView } from '../components/favorite'
import { removeFromFavorite } from '../features/product/productSlice'

type Props = {}
const FavoritePage = (props: Props) => {
  const { favoritedProducts } = useAppSelector((state) => state.product)
  const dispatch = useAppDispatch()

  const handleRemove = (id: string) => {
    dispatch(removeFromFavorite(id))
  }

  return (
    <Layout>
      <FavoriteView
        favoritedProducts={favoritedProducts}
        onRemoveFavorite={handleRemove}
      />
    </Layout>
  )
}
export default FavoritePage
