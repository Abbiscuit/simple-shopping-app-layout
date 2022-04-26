# simple-shopping-app-layout

> Design Layout with Tailwindcss & Redux Toolkit

### 目的

- コンポーネントの切り出し対象及び範囲について適切な目安を見つける
- 切り出しが適正な場合、Redux Toolkit なども導入しやすいか検証する

### ディレクトリ構成

- `src/components/common` は `ui` （atom 層）以外の、汎用的なコンポーネント（例：Header、Search など）
  - 特定のドメイン（例：Product, Favorite...等）に依存しない
- `src/components/ui` は原則として `state` を含まない全てのプリミティブはコンポーネント（例: input, button）またはそれらを生成するコンポーネント (例: Link, Typography 等)
- `src/components/特定のドメイン` はその**コンテンツ**を表す単語（Product, Cart）などを基準に切り出されたコンポーネント

その他に `hooks` 系も上にある**特定のドメイン**を基準にフォルダを分ける

> お気に入りの商品などを作成するときは、 `Product` と `Favorite` などを分けずに、 `FavoriteProduct` のように `Product` に追加してみた

### 学び

適切にドメインを切り出すことができれば、コンポーネントの再利用は楽にかなり楽になる。逆に、早すぎる抽象化をしてしまうと、コンポーネントの設計が困難と感じた。

CDD(コンポーネント駆動開発)を参考に**小さなコンポーネントから作り出す**を試してみたが、コンポーネントの切り出し範囲を小さくしすぎてしまい、不必要にファイル数が大きくなったり、かえって再利用しにくいコンポーネントになってしまった。

どのようなプロジェクトなのか等、一概に言えない点もあるが下記ぐらいの粒度がコードの修正や使い回しの観点からでも程よかった。

```jsx
import {
  ArrowDownIcon,
  ArrowUpIcon,
  XCircleIcon,
} from '@heroicons/react/outline'

type Props = {
  readonly cartItemCount: number
}
const CartItem = ({ cartItemCount }: Props) => {
  return (
    <article className="items-between flex flex-row space-x-4">
      <img
        className="h-20 w-20 bg-gray-100 object-cover"
        src="https://images.unsplash.com/photo-1650784422931-d4cf8f672a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <div className="flex flex-col">
        <div className="flex flex-1 flex-row items-center justify-between">
          <span>休日の旅セット</span>
          <span className="text-sm">&yen;12,800</span>
        </div>
        <div className="flex flex-1 flex-row items-center justify-between">
          <button aria-label="delete item button">
            <XCircleIcon width={20} />
          </button>
          <div className="flex flex-row gap-x-2">
            <button className="px-1">
              <ArrowDownIcon width={14} />
            </button>
            <button className="px-1">
              <ArrowUpIcon width={14} />
            </button>
          </div>
          {cartItemCount > 0 && (
            <span className="text-sm">数量:{cartItemCount}</span>
          )}
        </div>
      </div>
    </article>
  )
}
export default CartItem
```
