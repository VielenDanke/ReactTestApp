import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick/>
      <ClassClick />
    
      {/* <Counter /> */}

        {/* <Message/> */}
        {/* <Greet name="Aliya" heroName="Wonder Woman">
          <p>This is a children props</p>
        </Greet>
        <Greet name="Vlad" heroName="Batman">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="Almat" heroName="Superman" />
        <Welcome name="Bruce" heroName="Batman"/> */}
        {/* <Welcome name="Clarc" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonder Woman"/> */}
        {/* <Hello/> */}
    </div>
  );
}

export default App;
