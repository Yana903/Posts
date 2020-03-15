import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Pagination = (props) => {
  let pages = [];
  let startPage = 1;
  let pagingNumberItems = 5;
  let endPage = startPage + pagingNumberItems;
  let maxPage = Math.ceil(props.maxItemQty / props.limit);

  endPage = (endPage > maxPage ? maxPage : endPage);
  let pagesToDisplay = pagingNumberItems;
  if ( (maxPage - startPage) <= pagingNumberItems) {
    pagesToDisplay = maxPage - startPage
  }
  if(props.currentPage > pagesToDisplay) {
    startPage = props.currentPage - pagesToDisplay;
    endPage = startPage + pagesToDisplay
  }
  endPage = (endPage > maxPage ? maxPage : endPage);

  for(let i = startPage; i <= endPage; i++) {
    pages.push(<li className="" onClick = {() => {props.setCurrentPage(i)}} key={i}><Link to="#">{i}</Link></li>);  
  }
  
  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin="">
      { !props.currentPage ? null : <li className="uk-first-column" onClick={ () => {props.setCurrentPage(props.currentPage-1)} }>
        <Link to="#">
          <span
            className="uk-icon uk-pagination-previous"
            uk-pagination-previous=""
          ></span>
        </Link>
      </li>}
      {/* Show numbers of pages */}
      {pages}
      <li className="uk-first-column" onClick={ () => {props.setCurrentPage(props.currentPage+1)} }>
        <Link to="#">
          <span
            className="uk-icon uk-pagination-next"
            uk-pagination-next=""
          ></span>
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
