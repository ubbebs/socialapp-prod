import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useDebouncedCallback } from 'use-debounce'
import { useSnapshot } from 'valtio'
import { stateStore } from '../../../../stateStore'
import { useGetSearchUser } from '../main/searchbar/utils/getSearchResult'

const Explore = () => {
  const state = useSnapshot(stateStore).searchKey
  const [search, setSearch] = useState<string | null>(state || null)

  const debounced = useDebouncedCallback((value) => {
    setSearch(value)
  }, 1000)

  const { data: dataSearchUser, isLoading: isLoadingSearchUser } =
    useGetSearchUser(search)

  console.log(search)
  console.log(state)
  console.log(dataSearchUser)
  console.log(isLoadingSearchUser)

  return (
    <>
      <div className="max-w-[300px] w-full bg-white rounded-full flex items-center gap-2 p-2 text-zinc-500">
        <CiSearch />
        <input
          className="grow outline-none text-sm text-black"
          placeholder="Search"
          onChange={(e) => debounced(e.target.value)}
        />
      </div>
      <ul className="overflow-auto flex gap-4 flex-col px-3">
        <li>siema</li>
      </ul>
    </>
  )
}

export { Explore }
