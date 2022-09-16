import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';
import {WildCard, DetailT} from '../../List.types'

const MovieDetail:React.FC<DetailT> = (props) => {
 

  const detail = props;
  const rating = parseInt(detail.vote_average).toFixed(2)
  const router = useRouter();

  if(!detail){
    return (
      <Loader />
    )
  }

  return (
    <>
      {detail && 
      <div className='flex bg-black'>
        <div className='w-100  flex justify-center items-center m-3'>
          <img  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${detail.poster_path}`} alt="img" />
        </div>
        <div className=' box-border flex flex-col justify-center items-center border border-red-500 rounded-2xl p-5 -m-[-10px]'>
          <div className='flex justify-around w-full mb-10 '>
            <div>
              <h1 className='text-3xl text-white'>{detail.title}</h1>
              <span className='w-100 text-slate-500'>
                {`${detail.release_date} | ${detail.runtime}`}</span>
            </div>
              <div className='w-20 h-auto flex items-center text-md font-bold flex-wrap justify-center text-center bg-yellow-200 rounded-2xl'>
                {`Rating ${rating}`}
              </div>
          </div>
          <div className='flex justify-center'>
            <p className='text-xl w-10/12 mb-10 text-white rounded-xl p-2'>{detail.overview}</p>
          </div>
          <div className='flex justify-left w-10/12'>
            <button 
              className='text-white p-2 bg-blue-400 rounded-2xl hover:bg-blue-700 hover:ease-in-out duration-300'
              onClick={() => router.back()}>
                Back
            </button>
          </div>
        </div>
      </div>
      }
    </>

  )
}

export async function getServerSideProps(context: WildCard){

  const {params} = context

  const id = params.movieId;

  const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a58e7fb1207940e3640a468b00b20609&language=en-US`)
  .then(response => {return response.json()})

  return {
    props: data
  }

}

export default MovieDetail