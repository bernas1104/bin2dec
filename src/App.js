import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [baseInput, setBaseInput] = useState('2')
  const [baseOuput, setBaseOuput] = useState('10');
  const [numberInput, setNumberInput] = useState('');
  const [numberOutput, setNumberOutput] = useState('');
  const [baseExample, setBaseExample] = useState('1100010 --> Only 1\'s and 0\'s');
  const [placeHolder, setPlaceHolder] = useState('1100010');

  useEffect(() => {
    switch(baseInput){
      case '2':
        setPlaceHolder('1100010');
        setBaseExample('1100010 --> Only 1\'s and 0\'s');
        break;
      case '8':
        setPlaceHolder('7655210');
        setBaseExample('7655210 --> Only between 0 and 7');
        break;
      case '10':
        setPlaceHolder('1067496');
        setBaseExample('1067496 --> Only between 0 and 9');
        break;
      case '16':
        setPlaceHolder('09AF5EC');
        setBaseExample('09AF5EC --> Only between 0 and 9, A and F');
        break;
      default:
        console.log('Input bases must be: 2, 8, 10 or 16');
    }
  }, [baseInput]);

  function handleNumberInput(e) {
    const newValue = String(e.target.value);
    const len = newValue.length;

    if(newValue[len - 1] !== '1' && newValue[len - 1] !== '0' && newValue !== ''){
      if(!document.querySelector('.alert')){
        let alertDanger = document.createElement('div');
        let alertWarning = document.createElement('div');

        alertDanger.classList.add('alert', 'danger');
        alertWarning.classList.add('alert', 'warning');

        let smallDanger = document.createElement('small');
        let smallWarning = document.createElement('small');

        smallDanger.innerText = '* Input number must follow the input base';
        smallWarning.innerText = baseExample;

        alertDanger.appendChild(smallDanger);
        alertWarning.appendChild(smallWarning);

        document.querySelector('.user-input').append(alertDanger, alertWarning);

        setTimeout(() => {
          alertDanger.style.opacity = 0;
          alertWarning.style.opacity = 0;
        }, 1000);

        setTimeout(() => {
          alertDanger.remove();
          alertWarning.remove();
        }, 2000);
      }
    } else {
      setNumberInput(e.target.value);
    }
  }

  function handleConvert(e) {
    e.preventDefault();

    const input = String(numberInput);
    let sum = 0;
    let exp = input.length - 1;

    for(let i = 0; i < input.length; i++)
      sum += parseInt(input[i]) * Math.pow(baseInput, exp--);

    setNumberOutput(sum);
  }

  return (
    <div className="container">
      <form>
        <div className="title">
          <h1>Base 2 Base Converter</h1>
        </div>

        <div className="base-select">
          <select name="base-input" id="base-input" 
            value={baseInput} 
            onChange={e => { setBaseInput(e.target.value) }
          }>
            <option value={2}>2 - Binary</option>
            {/* <option value={8}>8 - Octal</option>
            <option value={10}>10 - Decimal</option>
            <option value={16}>16 - Hexadecimal</option> */}
          </select>
          <select name="base-output" id="base-output"
            value={baseOuput}
            onChange={e => { setBaseOuput(e.target.value) }
          }>
            {/* <option value={2}>2 - Binary</option> */}
            {/* <option value={8}>8 - Octal</option> */}
            <option value={10}>10 - Decimal</option>
            {/* <option value={16}>16 - Hexadecimal</option> */}
          </select>
        </div>

        <div className="input-data">
          <div className="user-input">
            <input type="text" name="input" className="form-io"
              placeholder={"ex: " + placeHolder}
              value={numberInput}
              onChange={e => { handleNumberInput(e); }}
            />
          </div>
          <button type="submit" onClick={e => handleConvert(e)}>Convert</button>
          <input type="text" name="output" className="form-io" disabled
            value={numberOutput}
          />
        </div>
      </form>
    </div>
  );
}