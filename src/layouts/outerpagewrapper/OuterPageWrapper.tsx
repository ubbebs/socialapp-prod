import { Footer } from '../../components/footer/Footer'

type OuterPageType = {
  children: JSX.Element
}

export const OuterPage = ({ children }: OuterPageType) => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center gradient-cross">
      <div className="w-full md:w-[400px] h-full md:min-h-[600px] bg-white box-border p-8 flex flex-col justify-between md:rounded-xl">
        <div className="flex flex-col gap-5 p-5 items-center">{children}</div>
        <Footer />
      </div>
    </div>
  )
}
