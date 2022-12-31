import { AuthorHeaderLoader } from './AuthorHeaderLoader'
import { PreviewPostLoader } from './PreviewPostLoader'

export const FollowingPostsLoader = () => {
  return (
    <div className="h-full w-full overflow-y-auto grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-10 scrollbar">
      <div className="border rounded-xl p-3 flex flex-col gap-3">
        <AuthorHeaderLoader />
        <PreviewPostLoader />
      </div>
    </div>
  )
}
