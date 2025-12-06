import React from 'react';

function ButtonChangeCount(props) {

    const {
        changeCount,
    } = props;

    return (
        <div>
            <button onClick={changeCount}>+1</button>
        </div>
    );
}

export default ButtonChangeCount;