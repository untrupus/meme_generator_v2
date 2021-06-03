import React from 'react';
import './ErrorNotice.css';

const ErrorNotice = () => {
    return (
        <div className='errorNotice'>
            <p className='smile'>&#9785;</p>
            <p> Something went wrong...</p>
        </div>
    );
};

export default ErrorNotice;