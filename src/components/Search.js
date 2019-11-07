/**
 * @Date:   2019-11-06T23:08:07+00:00
 * @Last modified time: 2019-11-07T14:01:18+00:00
 */
import React from 'react';

const Search = (props) => {
  return (
    <div className="container-fluid" style={{paddingTop: 20, marginBottom: 20}}>
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-4">
        <form className="form-inline" action="" onSubmit={props.handleSubmit}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search movies" onChange={props.handleInput}/>
          <button className="btn btn-dark my-sm-0" type="submit">Search</button>
        </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  )
}

export default Search;
