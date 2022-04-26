import type { Counter } from '../../../type/counter'
import CounterCard from '../CounterCard'

type Props = Counter

function CounterViewPresenter({
  value,
  onIncrement,
  onDecrement,
}: Props): JSX.Element {
  return (
    <section className="px-4 py-4">
      <h2 className="text-2xl font-semibold">カウンターのページ</h2>
      <div className="mt-4">
        <CounterCard
          value={value}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
        />
      </div>
    </section>
  )
}
export default CounterViewPresenter
