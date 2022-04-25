import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { decrement, increment } from '../../../features/counter/counterSlice'

import CounterViewPresenter from './CounterView.presenter'

type Props = {}
function CounterView({}: Props) {
  const { value } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <CounterViewPresenter
      value={value}
      onIncrement={() => dispatch(increment())}
      onDecrement={() => dispatch(decrement())}
    />
  )
}
export default CounterView
