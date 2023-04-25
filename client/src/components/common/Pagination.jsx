import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';

function Pagination(props) {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;

    //create an array of page numbers using lodash (Optimized version of Underscore Js library)
    const pages = _.range(1, pageCount + 1);

    //handle previous button
    const handlePrevious = () => {
        if (currentPage === 1) return;
        onPageChange(currentPage - 1);
    }

    //handle next button
    const handleNext = () => {
        if (currentPage === pageCount) return;
        onPageChange(currentPage + 1);
    }

    return (
        <>
            <div className="card-footer d-flex align-items-center">
                <p className="m-0 text-muted">Showing <span>1</span> to <span>8</span> of <span>16</span> entries</p>
                <ul className="pagination m-0 ms-auto">
                    <li className="page-item">
                        <a className="page-link" onClick={handlePrevious}>
                            {/* {/* Download SVG icon from http://tabler-icons.io/i/chevron-left */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="15 6 9 12 15 18" /></svg>
                        </a>
                    </li>

                    {pages.map(page => (
                        <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                            <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                        </li>
                    ))}

                    <li className="page-item">
                        <a className="page-link" onClick={handleNext}>
                            {/* next {/* Download SVG icon from http://tabler-icons.io/i/chevron-right */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="9 6 15 12 9 18" /></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

Pagination.propTypes = {
    itemsCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired
}

export default Pagination;