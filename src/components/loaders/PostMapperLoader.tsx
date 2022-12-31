import { PreviewPostLoader } from './PreviewPostLoader'

export const PostMapperLoader = () => {
  return (
    <div className="overflow-y-auto grid grid-cols-3 gap-3 lg:gap-5 scrollbar w-full">
      <PreviewPostLoader />
      <PreviewPostLoader />
      <PreviewPostLoader />
    </div>
  )
}
