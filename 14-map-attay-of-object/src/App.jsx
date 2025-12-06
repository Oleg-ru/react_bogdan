import './App.css'
import Person from "./components/Person.jsx";
import {useEffect, useState} from "react";
import personsData from './data/persons.js'

function App() {

    const [persons, setPersons] = useState(null);

    useEffect(() => {
        personsData().then(data => setPersons(data))
    }, []);

    return (
        <div className="person_main-container">
            {persons ? (persons.map(person => <Person key={person.id} {...person}/>)) : 'Loading'}
        </div>
    )
}

export default App
