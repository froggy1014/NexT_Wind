import axios from 'axios'
import type { NextPage } from 'next'
import { useRef, useState } from 'react';
import List from '../components/List';
import Loader from '../components/Loader';
import { ListT } from '../List.types';
import { useRouter } from 'next/router'

const MY_API = 'a58e7fb1207940e3640a468b00b20609'


const Home: NextPage = (props) => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { results }: any = props;
  
  const GoSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setValue('')
    router.push(`/movie/search/${value}`);
  }

  return(
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center '>
        <h1 className='text-white text-5xl mb-10'>Movie Search</h1>
      </div>
      <form className='w-full flex justify-center mb-20' onSubmit={GoSearch}>
        <input 
          className='w-8/12 h-10 rounded-xl mb-6 p-2 focus:border-2 focus:outline-blue-400 focus:boxShadow focus:transition-all'
          ref={inputRef} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          value={value}
          type="text" />
      </form>
      <div className=' flex flex-col items-center bg-black	justify-center'>
        <h1 className='p-3 text-4xl text-white	'>Top Rated Movies</h1>
        <div className='w-screen flex flex-wrap items-center justify-center'>
          {results.length >  0 ? results.map((list: ListT) => {
            return (
             <List key={list.id} list={list}/>
            )
            })
           : <Loader/>}
        </div> 
        
      </div>
    </div>
  )
}

export async function getStaticProps(){

    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${MY_API}&language=en-US&page=1`)
    .then(response => {return response.json()})
    .catch(err => console.log(err))
    
    console.log(data);

  return {
    props: {
      results : data.results
    }
  }
}


export default Home
 