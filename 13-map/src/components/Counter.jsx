import React from 'react';

function Counter(props) {

    const {count} = props;

    return (
        <p>Counter: {count}</p>
    );
}

export default Counter;