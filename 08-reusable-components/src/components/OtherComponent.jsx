import React from 'react';

function OtherComponent({text = 'some text'}) {
    return (
        <>
            <p>{text}</p>
        </>
    );
}

export default OtherComponent;