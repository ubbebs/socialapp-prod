import { useRef } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'use-debounce'
import { stateStore } from '../../../../../stateStore'

const SearchBar = () => {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const explore = () => {
    console.log(inputRef.current?.value)
    stateStore.searchKey = inputRef.current?.value
    navigate('/explore')
  }

  return (
    <div>
      <div className="max-w-[300px] w-full bg-white rounded-full flex items-center gap-2 p-2 text-zinc-500">
        <input
          className="grow outline-none text-sm text-black"
          placeholder="Search"
          ref={inputRef}
        />
        <button type="button" onClick={explore}>
          <CiSearch />
        </button>
      </div>
    </div>
  )
}

export { SearchBar }
