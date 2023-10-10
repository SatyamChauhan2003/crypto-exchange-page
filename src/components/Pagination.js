import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
      <button style={{color:"blue",border:"1px solid blue", padding:"6px 27px",borderRadius:"18px",fontWeight:"bold",fontSize:"15px"}}>Previous</button>
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <button style={{color:"white",backgroundColor:"blue", padding:"8px 30px",borderRadius:"18px",fontWeight:"bold",fontSize:"15px"}}>Next</button>
      </li>
    </ul>
  );
};

export default Pagination;
