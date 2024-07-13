import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from './useFetch';

export default function DetailsPage() {
    const {id} = useParams();
    const {data, loading} = useFetch('https://api.themoviedb.org/3/movie/' + id);
  return (
    <div>
        {
            loading ? <h1>Loading....</h1> 
            :<div className='movie-details-container'>
                <div>
                <img width={"100%"} src={"https://image.tmdb.org/t/p/original"  + data?.poster_path}/>
                </div>
              
                <div>
                    <h1>{data?.title}</h1>
                    <h3>{data?.genres?.map(x=>x.name)?.join(', ')}</h3>
                    
                    <p>{data?.runtime + "miniuts"}</p>
                    <p>{data?.overview}</p>
                </div>
            </div>
        }
    </div>
  )
}
