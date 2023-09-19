import React from 'react';
import "./style.css"

const Button = ({handleClick, text, className}) => {
  return (
    <button onClick={handleClick} className={className}>
        {text}
    </button>
  )
}

export default Button