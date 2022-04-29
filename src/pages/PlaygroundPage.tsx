import { useEffect, useRef } from 'react'
import { Layout } from '../components/common'
import { Button } from '../components/ui'

type Props = {}
const PlaygroundPage = (props: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    buttonRef.current?.classList.add('hello')
  }, [])

  return (
    <Layout>
      <section className="px-4 py-4">
        <h2 className="text-3xl font-semibold">PlaygroundPage</h2>
      </section>

      <Button
        size="default"
        color="secondary"
        variant="default"
        ref={buttonRef}
      >
        ButtonButtonButton
      </Button>
      <Button size="full" color="primary" variant="full" ref={buttonRef}>
        ButtonButtonButton
      </Button>
      <Button size="default" color="dark" variant="square" ref={buttonRef}>
        ButtonButtonButton
      </Button>
    </Layout>
  )
}
export default PlaygroundPage
