import React from 'react';

const SearchBar = ({ name, type, onChange }) => {
    return (
        <div className="ms-auto text-muted">
            Search:
            <div className="ms-2 d-inline-block">
                <input type={type} className="form-control form-control-sm" aria-label="Search invoice" id={name} placeholder="Search..." onChange={onChange} />
            </div>
        </div>
    );
};

export default SearchBar;
