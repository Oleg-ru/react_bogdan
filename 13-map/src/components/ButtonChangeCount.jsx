import React from 'react';

function ButtonChangeCount(props) {

    const {
        changeCount,
        text,
    } = props;

    return (
        <div>
            <button onClick={changeCount}>{text}</button>
        </div>
    );
}

export default ButtonChangeCount;