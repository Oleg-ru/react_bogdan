import React from 'react';

function PetInfo(props) {
    const {
        age,
        animal,
        hasPet,
    } = props;
    console.log(props)



    return (
        <h1>{hasPet ? `My ${animal} is ${age} month old` : 'I do not have animal'}</h1>
    );
}

export default PetInfo;