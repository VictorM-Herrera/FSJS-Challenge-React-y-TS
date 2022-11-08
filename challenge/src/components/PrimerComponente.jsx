import React from 'react'
//rafc como atajo y lo crea solo
export const PrimerComponente = () => {
    let user=[
    {name:"Maxi Herrera", id:1},
    {name:"Jasmin Martinez", id:2},
    {name:"Tomas Porcheto", id:3}
  ]
  return (
    <div className='caja-usuarios'>
    <h3>Nombre de usuarios:</h3>
      <ul>
        {
            user.map((element, index) => {
              return (
              <li key={index}>
                {element.name} id: {element.id}
                </li>
              )  
            })
        }
      </ul>
  </div>
  )
}