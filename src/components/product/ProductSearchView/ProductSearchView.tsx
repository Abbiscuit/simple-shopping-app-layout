import { ChangeEvent, FormEvent, useState } from 'react'
import { useProduct } from '../../../hooks/product'
import { Search } from '../../common'
import ProductCard from '../ProductCard'

type Props = {}
function ProductSearchView({}: Props) {
  const { products, handleAddToFavorite, isFavorite } = useProduct()

  const [query, setQuery] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('search!')
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const resetQuery = () => {
    setQuery('')
  }

  const filteredProducts = products.filter((product) =>
    product.description.includes(query)
  )

  console.log(filteredProducts)

  return (
    <>
      <div className="sticky top-0 px-4 py-4">
        <Search
          type="text"
          name="query"
          value={query}
          onSubmit={handleSubmit}
          onChange={handleSearchChange}
        />
      </div>
      <section className="px-4 py-4">
        <h2 className="text-2xl font-semibold">全ての商品</h2>
        <div className="mt-4 grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  imgUrl={product.imgUrl}
                  to={product.to}
                  description={product.description}
                  isFavorite={isFavorite}
                  onAddToFavorite={handleAddToFavorite}
                />
              )
            })
          ) : (
            <button
              className="w-full rounded bg-gray-100 px-6 py-2 text-sm"
              onClick={resetQuery}
            >
              再検索
            </button>
          )}
        </div>
      </section>
    </>
  )
}
export default ProductSearchView
