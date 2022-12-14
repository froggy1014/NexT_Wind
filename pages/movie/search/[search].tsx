import React from 'react'
import { WildCard, ListT } from '../../../List.types'
import List from '../../../components/List'
import Loader from '../../../components/Loader'
import Link from "next/link"

interface GetParams {
  data: ListT
  query: string
}

const SearchedMovie:React.FC<GetParams>= ({data, query}) => {


  const { results } = data;
  
  return(
    <div className='w-screen h-9/12 flex flex-col items-center bg-black	justify-center'>
      <h1 className='p-3 text-4xl text-white	'>{`You Searched "${query}"`}</h1>
      <div className='w-screen flex flex-wrap items-center justify-center'>
        {results.length >  0 ? results.map((list: ListT) => {
          return (
           <List key={list.id} list={list}/>
          )
          })
         : <Loader/>}
      </div> 
      <Link  href='/'><a className='mt-20 w-40 text-center text-white p-2 bg-blue-400 rounded-2xl hover:bg-blue-700 hover:ease-in-out duration-300 text-white'>Home</a></Link>
    </div>
  )
}

export async function getServerSideProps(context: WildCard){
  const {params} = context

  const query = params.search;

  const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MY_API}&language=en-US&query=${query}&page=1&include_adult=false`)
  .then(response => {return response.json()})

  return {
      props: {data: data, query: query}

  }

}




export default SearchedMovie