import React, {useState} from 'react';
import {generateRandomNumber} from "../utils/GenerateRandomNumber.jsx";

function RandomNumber(props) {

    const {
        maxNum,
    } = props;

    const [randomNum, setRandomNum] = useState(generateRandomNumber(maxNum));
    
    function handleClickGetRandomNumber() {
        setRandomNum(generateRandomNumber(maxNum));
    }
    
    return (
        <div>
            <h3>{randomNum}</h3>
            <button onClick={handleClickGetRandomNumber}>Generate</button>
        </div>
    );
}

export default RandomNumber;