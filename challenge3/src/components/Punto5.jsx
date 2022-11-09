import React from 'react'

export default function Punto5() {
    let now= new Date();
  return (
    <>
    <p>Hoy es:</p>
    <p>{now.toDateString()}</p>
    </>
  )
}
