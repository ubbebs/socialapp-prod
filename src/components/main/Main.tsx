import { AddPost } from './addpost/AddPost'
import './main.css'
import { SearchBar } from './searchbar/SearchBar'

const Main = () => {
  return (
    <div className="grow mt-[100px] lg:mt-0 lg:py-[20px] lg:pr-[20px]">
      <div className="flex flex-col gap-4 w-full rounded-[50px] p-3 lg:p-7 lg:h-full lg:bg-zinc-50 relative scrollbar">
        <div className="flex w-full justify-between">
          <SearchBar />
          <div className="hidden lg:flex">
            <AddPost />
          </div>
        </div>
        <div className="bg-blue-500">
          <p>stories</p>
        </div>
        <div className="grow overflow-auto">
          <p>content</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
          <p>dasda</p>
        </div>
      </div>
    </div>
  )
}

export { Main }
