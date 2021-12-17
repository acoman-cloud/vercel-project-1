import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick=(e)=>{
    setCurrentValue(parseFloat(currentValue+e.target.textContent));
  }
  const handlePlus=(e)=>{
    setPreviousValue(parseFloat(currentValue));
    setCurrentValue(0);
    setOperation('+');
  }
  const handleMinus=(e)=>{
    setPreviousValue(parseFloat(currentValue));
    setCurrentValue(0);
    setOperation('-');
  }
  const handleMultiplication=(e)=>{
    setPreviousValue(parseFloat(currentValue));
    setCurrentValue(0);
    setOperation('*');
    console.log(previousValue);
  }
  const handleDivision=(e)=>{
    setPreviousValue(parseFloat(currentValue));
    setCurrentValue(0);
    setOperation('/');
  }
  const handleClear=(e)=>{
    setCurrentValue(0);
    setPreviousValue([])
    setOperation('')
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
  }
  const handlePeriod=(e)=>{
    setCurrentValue(currentValue+'.');
  }
  return (
    <main>
      <h1>Calculator</h1>
      {/* {operation && <h3>{previousValue[previousValue.length-2]} {operation} {previousValue[previousValue.length-1]} =</h3>} */}
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
          <h2 className='number' onClick={handleClear}>C</h2>
          <h2 className='number' onClick={handlePeriod}>.</h2>
          <h2 className='number' onClick={handleOutput}>=</h2>
          <h2 className='number' onClick={handleClick}>1</h2>
          <h2 className='number' onClick={handleClick}>2</h2>
          <h2 className='number' onClick={handleClick}>3</h2>
          <h2 className='number' onClick={handleClick}>4</h2>
          <h2 className='number' onClick={handleClick}>5</h2>
          <h2 className='number' onClick={handleClick}>6</h2>
          <h2 className='number' onClick={handleClick}>7</h2>
          <h2 className='number' onClick={handleClick}>8</h2>
          <h2 className='number' onClick={handleClick}>9</h2>          
          <h2 className='number' onClick={handleClick}>0</h2>
          
        </div>
    </main>
  );
}

export default App;
