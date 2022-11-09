import React from 'react'

export default function Padre() {
  return (
    <div>
        <h1>Soy el PADRE</h1>
        <Hijo/>
    </div>

  )
}

function Hijo() {
  return (
    <>
        <h2>Soy el HIJO</h2>
        <Nieto/>
    </>
  )
}

function Nieto() {
  return (
    <h3>Soy el NIETO</h3>
  )
}


