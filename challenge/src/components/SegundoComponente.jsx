import React from 'react'


export default function SegundoComponente() {
function sumar()
{
    let num1= parseInt(prompt("ingrese el primer numero"));
    let num2= parseInt(prompt("ingrese el segundo numero"));
    let resultado= num1+num2;
    alert("el resultado es: " +resultado);
}
  return (
    <div>
        <h2>Sumar Numeros: </h2>
        
        <div>
            <input type="button" value="Sumar" onClick={sumar}/>  
        </div>
    </div>
  )
}

/*<div>
            <label htmlFor="num1">Numero 1:</label>
            <input type="number" id="num1"/>  
        </div>
        <div>
            <label htmlFor="num2">Numero 2:</label>
            <input type="number" id="num2"/>  
        </div> */