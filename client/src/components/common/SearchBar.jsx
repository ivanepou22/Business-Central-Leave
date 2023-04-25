import React from 'react';

const SearchBar = ({ name, type, onChange }) => {
    return (
        <div className="form-group">
            <input type={type} className="form-control" id={name} placeholder="Search..." onChange={onChange} />
        </div>
    );
};

export default SearchBar;
