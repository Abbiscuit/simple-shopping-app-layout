type Props = {}
function Header({}: Props) {
  return (
    <div className="sticky top-0">
      <header className="flex h-16 flex-row items-center border-b bg-white px-4">
        <p className="flex-1">logo</p>
      </header>
    </div>
  )
}
export default Header
