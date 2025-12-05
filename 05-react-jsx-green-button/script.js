

const App = (props) => {
    const {
        initialButtonText,
        newButtonText,
        initialClassList,
    } = props;
    const [btnText, setBtnText] = React.useState(initialButtonText)
    const [btnGreen, setBtnGreen] = React.useState(initialClassList)

    const handleOnClick = () => {
        setBtnText(`${newButtonText} ${Math.floor(Math.random() * 100)}`);
        setBtnGreen('green-btn');
    };
    
    return (
        <div className="app">
            <button className={btnGreen} onClick={handleOnClick}>{btnText}</button>
        </div>
    )
}


const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me :-)" newButtonText="Helo from props" initialClassList=""/>);