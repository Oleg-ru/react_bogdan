import React from 'react';
import './Person.css'

function Person(props) {

    const {
        firstName,
        lastName,
        email,
        img,
    } = props;

    return (
        <div className="person_container">
            <div className="person_head">
                <div className="person_head__naming">{`${firstName} ${lastName}`}</div>
                <div className="person_head__email">{email}</div>
            </div>
            <img className="person_img" src={img} alt=""/>
        </div>
    );
}

export default Person;