import React from 'react';
import './App.css';
import { fetchHelloWorld } from './services/HelloWorldService';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: Date.now()
    }
    setInterval(() => {
      this.setState({
        currentTime: Date.now()
      });
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        {new Date(this.state.currentTime).toLocaleString()}
        <button onClick={() => this.clickHandler()}>Call API</button>
        {this.state.label}
      </div>
    );
  }
}

export default App;









/*import { useState } from 'react';
import './App.css';
import { fetchHelloWorld } from './services/HelloWorldService';

let timer;

function App() {
const [currentTime, setCurrentTime] = useState(Date.now());
const [label, setLabel] = useState(""); //esto es para pedir espacio en memoria 
const clickHandler = async () => {
    const result = await fetchHelloWorld();
    setLabel(result);
};

if(!timer){
    timer = setInterval(() => {
        setCurrentTime(Date.now());
    }, 1000);
}

return (
    <div className="App">
        {new Date(currentTime).toLocaleString()}
        <button onClick={() => clickHandler()}>Call API</button>
        {label}
    </div>
);
}
export default App;*/
