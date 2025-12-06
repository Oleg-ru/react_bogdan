import './App.css'
import ButtonChangeCount from "./components/ButtonChangeCount.jsx";
import {useState} from "react";
import Counter from "./components/Counter.jsx";

function App() {
  const [count, setCount] = useState(0);

  const handleCLickChangeCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <Counter count={count}/>
      <ButtonChangeCount changeCount={handleCLickChangeCount}/>
      <ButtonChangeCount changeCount={handleCLickChangeCount}/>
      <ButtonChangeCount changeCount={handleCLickChangeCount}/>
      <ButtonChangeCount changeCount={handleCLickChangeCount}/>
    </>
  )
}

export default App
