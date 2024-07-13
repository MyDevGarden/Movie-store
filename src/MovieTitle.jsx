import React from 'react';
import {Link} from 'react-router-dom';

export default function MovieTitle({movie_name, banner, release_date, id}) {
  return (
    <Link to={'/details/'+ id}>
    <div className='movie-tile'>
        <div className='img-div'>
            <img height={"100%"} src={"https://image.tmdb.org/t/p/original" + banner} alt=""/>
        </div>
        <h3 className='title'>{movie_name}</h3>
        <div className='release-date'>{release_date}</div>
    </div>
    </Link>
  )
}
