export interface ListT  {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
  results: ListT[]
}


export interface WildCard  {
  [key:string]: any;
}

interface PCT{
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}

// export interface DetailT {
//     title:string  ,
//     id:number,
//     overview:string,
//     // belongs_to_collection: null,
//     // budget: number,
//     // name: string,
//     // homepage: string,
//     // imdb_id: string,
//     // production_companies: PCT[],
//     // status: string,
//     // tagline: string,
// }

export interface DetailT {
  id: number,
  title:string,
  overview: string,
  poster_path: string,
  release_date: string,
  runtime:number,
  vote_average: string,
  results: ListT[]
  query:string
}