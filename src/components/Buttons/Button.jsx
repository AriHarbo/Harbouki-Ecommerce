import React from 'react'
import './Button.css'

export const Button = (props) => {
  return (
    <div>
      <button className='buttonCustom' style={{backgroundColor: props.bgColor, textDecoration: "none"}} onClick={props.funcion} >{props.children}</button>
    </div>
  )
}


