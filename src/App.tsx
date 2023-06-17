import { useState, ChangeEvent } from 'react'
import './App.css'

import { Palette, Sun, CircleHalf } from '@phosphor-icons/react';

import styled from 'styled-components';

const ColorCircle = styled.div` // estilização da circunferência de cor
  width: 846px;
  height: 423px;
  border-radius: 0 0 100rem 100rem;

  -webkit-box-shadow:0px 0px 100px 5px ${props => props.color}; // cor da sombra através do valor de matiz
  -moz-box-shadow: 0px 0px 100px 5px ${props => props.color};
  box-shadow: 0px 0px 100px 5px ${props => props.color};

  background-color: ${props => props.color};  // cor da circunferência através do valor de matiz
  `

function App() {
  const [hueValue, setHueValue] = useState<number>(0);                 // valor inicial de matiz
  const [saturationValue, setSaturationValue] = useState<number>(100); // valor inicial de saturação
  const [lightnessValue, setLightnessValue] = useState<number>(50);    // valor inicial de iluminação

  const hueThumbSelector = document.getElementById('hue-slider');
  hueThumbSelector?.style.setProperty('--hue-value', hueValue.toString()); // atualiza o valor de matiz no css

  const handleHueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHueValue(Number(event.target.value));
  };
  const handleSaturationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSaturationValue(Number(event.target.value));
  };
  const handleLightnessChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLightnessValue(Number(event.target.value));
  };

  function getColor() {
    const color = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)` // gera a cor a partir dos valores
    return color
  }

  return (
    <div className='flex flex-col items-center justify-start h-full w-full gap-8 overflow-hidden'>
      <ColorCircle color={getColor()}></ColorCircle>
      <div className='flex flex-col items-center justify-center gap-1'>
        <h1 className='text-2xl pt-8'>Ajustes de Iluminação</h1>
        <h4 className='text-xs text-gray-300'>{'HSL: ' + hueValue + ', ' + saturationValue + '%, ' + lightnessValue + '%'}</h4>
      </div>
      <div className='flex flex-col items-center justify-center gap-16 md:gap-20'>
        <div className='flex flex-row gap-1 items-center justify-center'>
          <Palette size={24} />
          <input
            id='hue-slider'
            type='range'
            min={0}
            max={360}
            value={hueValue}
            onChange={handleHueChange}
          />
        </div>
        <div className='flex flex-row gap-1 items-center justify-center'>
          <CircleHalf size={24} />
          <input
            type='range'
            min={0}
            max={100}
            value={saturationValue}
            onChange={handleSaturationChange}
          />
        </div>
        <div className='flex flex-row gap-1 items-center justify-center'>
          <Sun size={24} />
          <input
            type='range'
            min={0}
            max={100}
            value={lightnessValue}
            onChange={handleLightnessChange}
          />
        </div>
      </div>
    </div>
  )
}

export default App