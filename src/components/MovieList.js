/**
 * @Date:   2019-11-06T23:53:32+00:00
 * @Last modified time: 2019-11-08T10:11:03+00:00
 */
import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  return(
    <div className="container-fluid"> {/*movieInfo is props, passes props movieID is a prop, getting the id from the movies arrays maping it to the movie array*/}
      <div className="row" style={{paddingLeft:90}}>
          {
            props.movies.map((movie, i) => {
              return (
                <Movie key={i} movieInfo={props.movieInfo} movieId={movie.id} image={movie.poster_path} title={movie.title}/>
              )
            })
          }
      </div>
    </div>
  )

}

export default MovieList;
