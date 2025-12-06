import './App.css'
import RandomNumber from "./components/RandomNumber.jsx";

function App() {

  return (
    <>
      <RandomNumber maxNum={100} />
      <RandomNumber maxNum={10} />
      <RandomNumber maxNum={1000} />
    </>
  )
}

export default App
