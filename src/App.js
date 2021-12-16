import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState(0);

  const handleClick=(e)=>{
    console.log('wow', e.target.value)
  }
  return (
    <main>
      <h1>Calculator</h1>
      <div className='serial'>
        <input className='box' value={0} type='text' />
      </div>
        <div className='numbers'>
          <h2 className='number' onClick={handleClick} value={1}>1</h2>
          <h2 className='number' onClick={handleClick} value={2}>2</h2>
          <h2 className='number' onClick={handleClick} value='3'>3</h2>
          <h2 className='number' onClick={handleClick} value='4'>4</h2>
          <h2 className='number' onClick={handleClick} value='5'>5</h2>
          <h2 className='number' onClick={handleClick} value='6'>6</h2>
          <h2 className='number' onClick={handleClick} value='7'>7</h2>
          <h2 className='number' onClick={handleClick} value='8'>8</h2>
          <h2 className='number' onClick={handleClick} value='9'>9</h2>
          <h2 className='number' onClick={handleClick} value='0'>0</h2>
        </div>
        <div className='operations'>
          <h2 className='operation'>+</h2>
          <h2 className='operation'>-</h2>
          <h2 className='operation'>*</h2>
          <h2 className='operation'>/</h2>
        </div>
    </main>
  );
}

export default App;
