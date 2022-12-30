import React from 'react'

type InputDivType = {
  icon: JSX.Element
  valueRef: React.RefObject<HTMLInputElement>
  title: string
  type: string
  name: string
}

export const InputDiv = ({
  icon,
  valueRef,
  title,
  type,
  name,
}: InputDivType) => {
  return (
    <>
      <label className="pl-1 text-xs" htmlFor="Login">
        {title}
      </label>
      <div className="flex w-full items-center border-b-[1px] border-zinc-400 gap-2 pb-1">
        {icon}
        <input
          className="flex-1 focus:outline-none"
          type={type}
          name={name}
          id={name}
          ref={valueRef}
        />
      </div>
    </>
  )
}
