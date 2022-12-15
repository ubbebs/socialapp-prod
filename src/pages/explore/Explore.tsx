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
    <>
      <ExploreSearchBar func={handleSearch} />
      {dataSearchUser ? (
        <ExploreMapResult data={dataSearchUser.data} />
      ) : (
        <p>LOL</p>
      )}
    </>
  )
}

export { Explore }
