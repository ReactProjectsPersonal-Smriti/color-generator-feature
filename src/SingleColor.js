import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ color, index }) => {
  const { rgb, weight, hex } = color;
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hex}`

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 1000)
    return () => clearTimeout(timeout);
  }, [alert])
  return (
    <article onClick={() => {
      setAlert(true);
      navigator.clipboard.writeText(hexValue);
    }}
      className={`color  ${index > 10 && `color-light`}`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className='percent-value'>
        {weight}%
      </p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
}

export default SingleColor
