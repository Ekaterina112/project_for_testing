import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState('')
    const [state, setState] = useState(0)

    const onClick = () => setToggle(prev => !prev);

    const onChange = (e) => setValue(e.target.value);

    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 100)
    }, [])

    console.log(state)

    return (
        <div className="App">
            <h1 data-testid='value-elem'>{value}</h1>
            {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
            {data && <div>data</div>}
            <div>Hello world</div>
            <button onClick={onClick} data-testid='toggle-btn'>click me</button>
            <input type='text' placeholder='input value' onChange={onChange}/>
        </div>
    );
}

export default App;
