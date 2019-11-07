/**
 * @Date:   2019-11-07T00:01:45+00:00
 * @Last modified time: 2019-11-07T03:57:18+00:00
 */
import React from 'react';

const Movie = (props) => {
  return (
    <div className="card card-inline bg-light text-dark" style={{ width: '18rem', marginBottom: 20 }}>
      <div className="card-img-top ">
        {
          props.image == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="movie Image" style={{ width: "100%", height: 460}}/> :  <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="movie Image" style={{ width: "100%", height: 460}} />
        }
      </div>
      <div className="card-body">
        <h3 className="text-dark">{props.title}</h3>
        <button className="btn "><a href="#" className="btn btn-outline-dark my-sm-0" onClick={() => props.movieInfo(props.movieId)}>View Details</a></button>
      </div>
    </div>

  )
}

export default Movie;
