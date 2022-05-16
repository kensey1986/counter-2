import React from 'react'

export const Contador = (props) => {
    const {counter, aumentar, disminuir, mensaje}= props;
  return (
    <div className='mis-stilos'>
        <h1>
        contador = {counter}
        </h1>
        <button onClick={ aumentar } >aumentar</button>
            <button onClick={ disminuir } >Disminuir</button>
            <h3>{mensaje}</h3>
    </div>
  )
}
