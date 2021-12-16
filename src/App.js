import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick=(e)=>{
    setCurrentValue(parseInt(currentValue+e.target.textContent));
  }
  const handlePlus=(e)=>{
    setPreviousValue(currentValue);
    setCurrentValue(0);
    setOperation('+');
  }
  const handleMinus=(e)=>{
    setPreviousValue(currentValue);
    setCurrentValue(0);
    setOperation('-');
  }
  const handleMultiplication=(e)=>{
    setPreviousValue(currentValue);
    setCurrentValue(0);
    setOperation('*');
  }
  const handleDivision=(e)=>{
    setPreviousValue(currentValue);
    setCurrentValue(0);
    setOperation('/');
  }
  const handleClear=(e)=>{
    setCurrentValue(0);
    setPreviousValue('')
    setOperation('')
    console.log('clear!');
  }
  const handleOutput=(e)=>{
    if(operation==='+'){
      setCurrentValue(previousValue+currentValue);
    } else if(operation==='-'){
      setCurrentValue(previousValue-currentValue);
    } else if(operation==='*'){
      setCurrentValue(previousValue*currentValue);
    } else if(operation==='/'){
      setCurrentValue(previousValue/currentValue);
    }
    console.log('Computate!');
  }
  return (
    <main>
      <h1>Calculator</h1>
      <div className='serial'>
        <input className='box' value={currentValue} type='text' />
      </div>
        <div className='operations'>
          <h2 className='operation' onClick={handlePlus}>+</h2>
          <h2 className='operation' onClick={handleMinus}>-</h2>
          <h2 className='operation' onClick={handleMultiplication}>*</h2>
          <h2 className='operation' onClick={handleDivision}>/</h2>
        </div>
        <div className='numbers'>
          <h2 className='number' onClick={handleClick}>1</h2>
          <h2 className='number' onClick={handleClick}>2</h2>
          <h2 className='number' onClick={handleClick}>3</h2>
          <h2 className='number' onClick={handleClick}>4</h2>
          <h2 className='number' onClick={handleClick}>5</h2>
          <h2 className='number' onClick={handleClick}>6</h2>
          <h2 className='number' onClick={handleClick}>7</h2>
          <h2 className='number' onClick={handleClick}>8</h2>
          <h2 className='number' onClick={handleClick}>9</h2>
          <h2 className='number' onClick={handleClear}>C</h2>
          <h2 className='number' onClick={handleClick}>0</h2>
          <h2 className='number' onClick={handleOutput}>=</h2>
        </div>
    </main>
  );
}

export default App;
