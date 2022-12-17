import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useSnapshot } from 'valtio'
import { stateStore } from '../../stateStore'
import { useGetSearchUser } from '../../services/getSearchResult'
import { ExploreSearchBar } from '../../features/explore/ExploreSearchBar'
import { ExploreMapResult } from '../../features/explore/ExploreMapResults'

const Explore = () => {
  const state = useSnapshot(stateStore).searchKey
  const [search, setSearch] = useState<string | null>(state || null)
  const { data: dataSearchUser } = useGetSearchUser(search)
  const handleSearch = useDebouncedCallback((value: string) => {
    setSearch(value)
  }, 1000)

  return (
    <div className="max-w-[600px] lg:max-w-[1200px] w-full flex flex-col gap-5 p-12">
      <ExploreSearchBar func={handleSearch} />
      <hr className="border-0 h-[2px] gradient-linear" />
      {dataSearchUser ? (
        <ExploreMapResult data={dataSearchUser.data} />
      ) : (
        <p>LOL</p>
      )}
    </div>
  )
}

export { Explore }
