import React, { Component } from 'react'//esto es para React.Component

export class Auto extends Component {
  render() {
    return (
      <div>
        <Garage/>
        <p>Soy un Auto en una clase</p>
      </div>
    )
  }
}
export function Auto2()
{
    return(
        <div>
            <p>Soy un Auto en una funcion</p>
        </div>
    )
}
export function Componente(props)
{
    return(
        <>
            <p>Soy un auto {props.color}</p>
        </>
    )
}

function Garage()
{
    return(
        <h1>Quien sos vos?</h1>
    )
}