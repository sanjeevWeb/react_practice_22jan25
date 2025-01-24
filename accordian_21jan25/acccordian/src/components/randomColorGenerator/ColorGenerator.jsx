import React, { useEffect, useState } from 'react';
import './index.css'

const index = () => {
  const [colorType, setcolorType] = useState('rgb');
  const [color, setcolor] = useState('#fff');

  const utility = (len) => {
    return Math.floor(Math.random() * len)
  }

  const generateRandomHexColor = () => {
    const arr = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9']
    let hex = '#'
    
    for(let i=0;i<6;i++){
      hex += arr[utility(arr.length)]
    }
    setcolor(hex)
  }

  const generateRGBcolor = () => {
    const r = utility(256)
    const g = utility(256)
    const b = utility(256)
    setcolor(`RGB( ${r},${g},${b})`)

  }

  const handleClick = () => {
    return colorType === 'hex' ? generateRandomHexColor() : generateRGBcolor()
  }

  useEffect(() => {
    colorType === 'hex' ? generateRandomHexColor() : generateRGBcolor()
  }, [colorType]);

  return (
    <div>
      <div id="wrapper" style={{ width: "100vw",height: "100vh",background: color}}>
        <div id="buttons">
            <button onClick={() => setcolorType('rgb')}>RGB Color</button>
            <button onClick={() => setcolorType('hex')}>HEX Color</button>
            <button onClick={() => handleClick()}>Random Color</button>
        </div>
        <div id='colorType'>
            <h2>{colorType}</h2>
        </div>
        <div id='colorCombination'>
           <h1> {color}</h1>
        </div>
      </div>
    </div>
  );
}

export default index;
