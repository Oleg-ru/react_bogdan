import './App.css'
import {MyComponent} from "./components/MyComponent.jsx";
import OtherComponent from "./components/OtherComponent.jsx";

function App() {

    return (
        <>
            <MyComponent/>
            <OtherComponent />
            <MyComponent/>
            <OtherComponent text='two component'/>
        </>
    )
}

export default App
