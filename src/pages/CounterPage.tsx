import { Layout } from '../components/common'
import { CounterView } from '../components/counter'

type Props = {}
const CounterPage = (props: Props) => {
  return (
    <Layout>
      <CounterView />
    </Layout>
  )
}
export default CounterPage
