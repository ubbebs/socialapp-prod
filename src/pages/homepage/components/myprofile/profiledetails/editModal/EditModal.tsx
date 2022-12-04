import { Dispatch, SetStateAction } from 'react'

type EditModalType = {
  func: Dispatch<SetStateAction<boolean>>
}

const EditModal = (props: EditModalType) => {
  const { func } = props
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="h-[300px] w-[300px] bg-red-500 shadow-xl shadow-huge">
        <p>WITAJ PRZYWOŁYWACZU</p>
        <button type="button" onClick={() => func(false)}>
          X
        </button>
      </div>
    </div>
  )
}

export { EditModal }
