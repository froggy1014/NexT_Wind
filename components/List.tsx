import React from 'react'
import {ListT} from '../List.types'
import Link from "next/link"

interface Props {
  list : ListT;
}


const List:React.FC<Props> = ({list}) => {
  const {title, id} = list
  return (
    <>
      <div className='flex bg-blue-500 w-2/5 justify-center rounded-lg	p-2 m-2 hover:bg-blue-800 transition duration-300'>
        <Link href={`/movie/${id}`}>{title}</Link>
      </div>
    </>
  )
}

export default List