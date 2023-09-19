import React from 'react'

const Input = ({placeholder, id, type, name}) => {
  return (
    <input id={id} type={type} placeholder={placeholder} name={name}/>
  )
}

export default Input