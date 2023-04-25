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
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={'page-item'}>
                    <a className="page-link" onClick={handlePrevious}>{'<<'}</a>
                </li>
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                        <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}
                <li className={'page-item'}>
                    <a className="page-link" onClick={handleNext}>{'>>'}</a>
                </li>
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemsCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired
}

export default Pagination;