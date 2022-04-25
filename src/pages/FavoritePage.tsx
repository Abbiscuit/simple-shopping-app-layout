import { Layout } from '../components/common'
import { FavoriteView } from '../components/favorite'
import { useFavoriteItem } from '../hooks/favorite'

type Props = {}
const FavoritePage = (props: Props) => {
  const { favoriteItems, unFavoriteItem } = useFavoriteItem()
  return (
    <Layout>
      <FavoriteView
        favoriteItems={favoriteItems}
        onRemoveFavorite={unFavoriteItem}
      />
    </Layout>
  )
}
export default FavoritePage
