import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group mb-2">
            <label className="form-label" htmlFor={name}>{label}</label>
            <input
                {...rest}
                name={name}
                id={name}
                placeholder={`Enter ${name}`}
                className="form-control" />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;