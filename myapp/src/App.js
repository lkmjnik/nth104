import './App.css';
const Person= (props) =>{
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name:()</h2>
    <h2>Age: 30</h2>
    </>
  )
} 
const App = () => {
  return(
    <div className="app">
    <Person name={'john'}/>
    <Person/>
    <Person/>
    <Person/>
    <Person/>
    </div>
  );
}

export default App;
