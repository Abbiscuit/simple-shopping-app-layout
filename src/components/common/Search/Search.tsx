import { ChangeEvent, FormEvent } from 'react'

type Props = {
  readonly type?: string
  readonly name?: string
  readonly placeholder?: string
  readonly value: string | number
  readonly onChange: (e: ChangeEvent<HTMLInputElement>) => void
  readonly onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
function Search({
  type = 'text',
  name,
  value,
  placeholder = '条件で検索',
  onChange,
  onSubmit,
}: Props) {
  return (
    <form onSubmit={onSubmit}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="w-full border px-2 py-2"
        onChange={onChange}
      />
    </form>
  )
}
export default Search
