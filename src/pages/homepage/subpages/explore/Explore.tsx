import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useSnapshot } from 'valtio'
import { stateStore } from '../../../../stateStore'
import { useGetSearchUser } from '../../utils/getSearchResult'
import { SearchUsersBar } from './components/SearchUsersBar'
import { SearchUsersMap } from './components/SearchUsersMap'

const Explore = () => {
  const state = useSnapshot(stateStore).searchKey
  const [search, setSearch] = useState<string | null>(state || null)
  const { data: dataSearchUser } = useGetSearchUser(search)
  const handleSearch = useDebouncedCallback((value: string) => {
    setSearch(value)
  }, 1000)

  return (
    <>
      <SearchUsersBar func={handleSearch} />
      {dataSearchUser ? (
        <SearchUsersMap data={dataSearchUser.data} />
      ) : (
        <p>LOL</p>
      )}
    </>
  )
}

export { Explore }
