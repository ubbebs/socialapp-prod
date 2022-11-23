type StatsType = {
  posts: number | undefined
}

const Stats = (props: StatsType) => {
  const { posts } = props
  return (
    <div className="grid grid-cols-3 grid-rows-1 w-full max-w-[300px]">
      <p className="font-normal text-center text-md bg-white ">
        Posts: {posts}
      </p>
      <p className="font-normal text-center text-md bg-white border-solid border-black border-x-[1px]">
        Posts: {posts}
      </p>
      <p className="font-normal text-center text-md bg-white">Posts: {posts}</p>
    </div>
  )
}

export { Stats }
