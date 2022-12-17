import { CiSearch } from 'react-icons/ci'

type ExploreSearchBarType = {
  func: (value: string) => void
}

const ExploreSearchBar = (args: ExploreSearchBarType) => {
  const { func } = args
  return (
    <div className="max-w-[300px] w-full bg-zinc-100 rounded-full flex items-center gap-2 p-2 text-zinc-500">
      <CiSearch />
      <input
        className="grow outline-none text-sm bg-inherit text-black"
        placeholder="Search"
        onChange={(e) => func(e.target.value)}
      />
    </div>
  )
}

export { ExploreSearchBar }
