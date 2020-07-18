import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scheduler from './components/Scheduler/Scheduler';

const data = [
  { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Event 1', id: 1 },
  { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 }
];

function App() {
  return (
    <div className="App">
      <div className='scheduler-container'>
        <Scheduler events={data}/>
      </div>
    </div>
  );
}

export default App;
