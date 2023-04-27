import React from 'react';

const Input = ({ name, error, ...rest }) => {
    return (
        <>
            <input
                {...rest}
                name={name}
                id={name}
                placeholder={`Enter ${name}`}
                className="form-control" />
            {error && <div className="alert alert-danger">{error}</div>}
        </>
    );
};

export default Input;