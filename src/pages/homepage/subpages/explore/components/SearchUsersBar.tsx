import { CiSearch } from 'react-icons/ci'

type SearchUsersBarType = {
  func: (value: string) => void
}

const SearchUsersBar = (args: SearchUsersBarType) => {
  const { func } = args
  return (
    <div className="max-w-[300px] w-full bg-white rounded-full flex items-center gap-2 p-2 text-zinc-500">
      <CiSearch />
      <input
        className="grow outline-none text-sm text-black"
        placeholder="Search"
        onChange={(e) => func(e.target.value)}
      />
    </div>
  )
}

export { SearchUsersBar }
