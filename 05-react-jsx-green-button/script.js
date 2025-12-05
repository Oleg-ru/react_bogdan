

const App = () => {
    console.log('Called App')
    let btnText = 'Click me :-)';

    const handleOnClick = () => {
        btnText = 'Good men!!!'
        console.log(btnText)
    };
    
    return (
        <div className="app">
            <button onClick={handleOnClick}>{btnText}</button>
        </div>
    )
}


const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);