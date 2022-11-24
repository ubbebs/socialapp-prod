import { AddPost } from './addpost/AddPost'
import './main.css'
import { SearchBar } from './searchbar/SearchBar'

const Main = () => {
  return (
    <>
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
    </>
  )
}

export { Main }
