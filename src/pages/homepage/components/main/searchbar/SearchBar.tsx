import { CiSearch } from 'react-icons/ci'

const SearchBar = () => {
  return (
    <div className="max-w-[300px] w-full bg-white rounded-full flex items-center gap-2 p-2 text-zinc-500">
      <CiSearch />
      <input
        className="grow outline-none text-sm text-black"
        placeholder="Search"
      />
    </div>
  )
}

export { SearchBar }
