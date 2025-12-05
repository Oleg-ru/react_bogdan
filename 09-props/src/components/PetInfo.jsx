import React from 'react';

function PetInfo(props) {
    const {
        age,
        animal,
    } = props;
    console.log(props)
    return (
        <h1>My {animal} is {age} month old</h1>
    );
}

export default PetInfo;