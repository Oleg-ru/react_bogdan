import './App.css'
import ButtonChangeCount from "./components/ButtonChangeCount.jsx";
import {useState} from "react";
import Counter from "./components/Counter.jsx";

function App() {
  const [count, setCount] = useState(0);

    const buttonsTxtList = ["Click", "+1", "GO", "Up"];

  const handleCLickChangeCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <Counter count={count}/>
        {buttonsTxtList.map((buttonTxt, index) => <ButtonChangeCount key={index} text={buttonTxt} changeCount={handleCLickChangeCount}/>)}
    </>
  )
}

export default App
