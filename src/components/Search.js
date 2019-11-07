/**
 * @Date:   2019-11-06T23:08:07+00:00
 * @Last modified time: 2019-11-07T03:20:20+00:00
 */
import React from 'react';

const Search = (props) => {
  return (
    <div className="container-fluid" style={{paddingTop: 20, marginBottom: 20}}>
      <div className="row">
        <div class="col-md-5"></div>
        <div class="col-md-4">
        <form className="form-inline" action="" onSubmit={props.handleSubmit}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search movies" onChange={props.handleInput}/>
          <button className="btn btn-dark my-sm-0" type="submit">Search</button>
        </form>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  )
}

export default Search;
