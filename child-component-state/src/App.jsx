import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [name, setName] = useState('RESET');

    return (
        <div className="App">
            <div>{name}</div>

            {/* Use for Number 3 */}
            {/*<Input key={name} name={name} />*/}

            {/* Use for Number: 4 */}
            {/*<Input name={name} setName={setName} />*/}

            {/* Use for Numbers: 1,2 */}
            <Input name={name} />

            <ResetButton setName={setName} />
            <ChangeName setName={setName} />
        </div>
  );
}

// 1. PrevValue
const Input = ({ name }) => {
    const [value, setValue] = useState(name);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const [prevValue, setPrevValue] = useState(name);

    if (prevValue !== name) {
        setPrevValue(name);
        setValue(name);
    }


    return (
            <input value={value} onChange={onChange} />
    );
};

// 2. useEffect
// const Input = ({ name }) => {
//     const [value, setValue] = useState(name);
//
//     const onChange = (e) => {
//         setValue(e.target.value);
//     }
//
//     useEffect(() => {
//         setValue(name);
//     }, [name]);
//
//     return (
//         <input value={value} onChange={onChange} />
//     );
// };

// 3. Keys
// const Input = ({ name }) => {
//     const [value, setValue] = useState(name);
//
//     const onChange = (e) => {
//         setValue(e.target.value);
//     }
//
//     return (
//         <>
//             <input value={value} onChange={onChange} />
//             <Counter />
//         </>
//     );
// };

// 4. setName
// const Input = ({ name, setName }) => {
//     const [value, setValue] = useState(name);
//
//     const onChange = (e) => {
//         setValue(e.target.value);
//         setName(e.target.value);
//     }
//
//     if (value !== name) {
//         setValue(name);
//     }
//
//     return (
//         <input value={value} onChange={onChange} />
//     );
// };

const ResetButton = ({ setName }) => {

    const onClick = () => {
        setName('RESET');
    }

    return <button onClick={onClick}>Reset</button>;
};
const ChangeName = ({ setName }) => {
    return <button onClick={() => setName('Jimothy')}>Set Name</button>
};

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
};

export default App;
