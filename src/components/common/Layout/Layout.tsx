import type { ReactNode } from 'react'
import Header from '../Header'

type LayoutProps = {
  readonly children: ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50">
      <div className="sticky top-0">
        <Header />
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default Layout
