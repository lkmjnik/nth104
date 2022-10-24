import { useState, useEffect } from 'react';
import './App.css';

const Person = (props) => {
  return(
    <>
    <h1>Name : {props.name}</h1>
    <h2>Last Name: {props.LastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0); 
  useEffect(() =>{
    alert("Changed: " + counter);
  });
  return(
    <div className='App'>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      <Person name={'John'} LastName={'Doe'} age={21}/>
      <Person name={'Alpha'} LastName={'Huge'} age={2 + 2}/>
      <Person name={'Temuulen'} LastName={'Gansvkh'} age={19}/>
    </div>
  );
}

export default App;
