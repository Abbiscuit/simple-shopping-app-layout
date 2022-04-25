import { Link as ReactLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'

type Props = LinkProps & {
  readonly children: ReactNode
}

function Link({ to, children }: Props): JSX.Element {
  return <ReactLink to={to}>{children}</ReactLink>
}
export default Link
