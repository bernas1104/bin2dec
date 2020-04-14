import React, { useState, useEffect } from 'react';

import bin2dec from './functions/bin2dec';
import bin2octhex from './functions/bin2octhex';
import dec2any from './functions/dec2any';
import renderAlert from './functions/renderAlert';

import './App.css';

export default function App() {
  const [baseInput, setBaseInput] = useState('2')
  const [baseOutput, setBaseOutput] = useState('10');
  const [numberInput, setNumberInput] = useState('');
  const [numberOutput, setNumberOutput] = useState('');
  const [baseExample, setBaseExample] = useState('1100010 --> Only 1\'s and 0\'s');
  const [placeHolder, setPlaceHolder] = useState('1100010');
  const bases = [
    ['2', '2 - Binary',],
    ['8', '8 - Octal'],
    ['10', '10 - Decimal'],
    ['16', '16 - Hexadecimal']
  ];

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

    switch(baseInput){
      case '2':
        if(!/^[0-1]*$/g.test(newValue)){
          renderAlert(baseExample);
        } else {
          setNumberInput(e.target.value);
        }
        break;
      case '10':
        if(!/^[0-9]*$/g.test(newValue)){
          renderAlert(baseExample);
        } else {
          setNumberInput(e.target.value);
        }
        break;
      default:
        console.log('Input is only valid for base 2 and 10');
    }
  }

  function handleConvert(e) {
    e.preventDefault();

    const input = String(numberInput);
    let sum;

    switch(baseInput){
      case '2':
        switch(baseOutput){
          case '10':
            sum = bin2dec(input);
    
            setNumberOutput(sum);
            break;
          case '8': case '16':
            sum = bin2octhex(input, parseInt(baseOutput));
    
            setNumberOutput(sum);
            break;
          default:
            console.log('Output must be 2, 8, 10 or 16');
        }
        break;
      case '10':
        sum = dec2any(input, parseInt(baseOutput));

        setNumberOutput(sum);
        break;
      default:
        console.log('Input must be 2 or 10');
    }
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
            onChange={e => {
              const values = ['2', '8', '10', '16'];

              setBaseInput(e.target.value);

              const newOutputBase = values.find(
                value => value !== e.target.value
              );
              setBaseOutput(newOutputBase);
            }
          }>
            <option value={2}>2 - Binary</option>
            {/* <option value={8}>8 - Octal</option>*/}
            <option value={10}>10 - Decimal</option>
            {/*<option value={16}>16 - Hexadecimal</option> */}
          </select>
          <select name="base-output" id="base-output"
            value={baseOutput}
            onChange={e => { setBaseOutput(e.target.value) }
          }>
            { bases.map(base => {
                return base[0] !== baseInput ?
                  <option key={base[0]} value={base[0]}>{base[1]}</option> :
                  <option key={base[0]} value={base[0]} disabled>{base[1]}</option>
              })
            }
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