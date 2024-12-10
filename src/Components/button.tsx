import React ,{FC} from 'react'

const Button :FC<{text:string}>= (props) => {
  const {text} = props
    return (
    <div>

      <button className='bg-[#B88E2F] text-white text-bold px-9 py-4 text:lg scale-105 duration-500 shadow-sm'>{text}</button>
    </div>
  )
}

export default Button
