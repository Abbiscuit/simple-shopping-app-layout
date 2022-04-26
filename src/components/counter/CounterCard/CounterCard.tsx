import type { Counter } from '../../../type/counter'

type Props = Counter & {}
function CounterCard({ value, onIncrement, onDecrement }: Props): JSX.Element {
  return (
    <div className="rounded bg-white px-4 py-4 shadow">
      <span className="inline-block w-full text-center text-3xl font-semibold">
        {value}
      </span>
      <div className="mt-2 flex flex-row gap-x-2">
        <button
          onClick={onDecrement}
          className="w-full rounded bg-purple-50 px-4 py-2 text-sm text-purple-700"
        >
          Decrement
        </button>
        <button
          onClick={onIncrement}
          className="w-full rounded bg-purple-700 px-4 py-2 text-sm text-white"
        >
          Increment
        </button>
      </div>
    </div>
  )
}
export default CounterCard
