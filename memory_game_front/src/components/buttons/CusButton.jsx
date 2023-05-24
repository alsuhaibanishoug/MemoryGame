import React from 'react';

const CusButton = ({ callBackFn, cusClass, children }) => {
    return(
        <div
        className={`${cusClass}`}
        onClick={callBackFn}
    >
        {children}
    </div>
    );
}

export default CusButton;