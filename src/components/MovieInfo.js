/**
 * @Date:   2019-11-07T02:22:29+00:00
 * @Last modified time: 2019-11-08T10:11:38+00:00
 */
import React from 'react';

const MovieInfo = (props) => {
  return (
    <div className="container">
      <div className="row border border-secondary rounded" style={{marginTop:70,}}>
        <div className="col-md-5" style={{padding:20}}>
          {props.currentMovie.poster_path == null ? <img src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="movieimage" style={{width: "100%", height: 360 }}  />
          : <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="movieimage" style={{width: "100%", height: 360 }}/>}
        </div>                                                {/* displaying the current movie or selected movies images also display a default image if there is none*/}
        <div className="col-md-7" style={{padding:20}}>
          <div className="container">
            <h3>{props.currentMovie.title}</h3>
            <date>{props.currentMovie.release_date}</date>
            <p style={{paddingTop: 30}}>{props.currentMovie.overview}</p>
          </div>
          <div className="" onClick={props.movieInfoBack} style={{cursor: "pointer", paddingTop: 50, align: "right"}}>
            <button className="btn btn-outline-dark my-sm-0" style={{marginLeft: 10}}>Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo;
