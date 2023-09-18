import React from 'react';
import "./style.css"

const Button = ({text, className}) => {
  return (
    <button className={className}>
        {text}
    </button>
  )
}

export default Button