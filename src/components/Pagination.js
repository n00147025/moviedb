/**
 * @Date:   2019-11-07T00:56:43+00:00
 * @Last modified time: 2019-11-07T01:43:34+00:00
 */
import React from 'react';

const Pagination = (props) => {
  const pageLinks = []

  for(let i = 1; i <= props.pages; i++) {
    let active = props.currentPage == i ? 'active' : '';

    pageLinks.push(<li className={`page-item mask waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href='#' className={`page-link`}>{i}</a></li>)
  }

  return (
    <div className="container">
      <div className="row">
        <ul className="pagination justify-content-center">
          { props.currentPage > 1 ? <li className={`page-item mask waves-effect`} onClick={() => props.nextPage(props.currentPage - 1)}><a href='#' className={`page-link`}>Prev</a></li> : '' }
          { pageLinks }
          { props.currentPage < props.pages + 1 ? <li className={`page-item mask waves-effect`} onClick={() => props.nextPage(props.currentPage + 1)}><a href='#' className={`page-link`}>Next</a></li> : '' }
        </ul>
      </div>
    </div>
  )
}

export default Pagination;
