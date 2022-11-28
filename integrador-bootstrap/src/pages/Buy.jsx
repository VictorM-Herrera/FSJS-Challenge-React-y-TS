import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

export default function Buy() {
  return (
    <MDBContainer fluid>
        <MDBRow className='justify-content-center'>
            <div className='form-box'>
              <form action="" onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id='name'/>
                  <label htmlFor="dni">Dni</label>
                  <input type="number" id='dni'/>
                  <label htmlFor="adress">Direccion</label>
                  <input type="text" id='adress'/>
                  <label htmlFor="credit">Tarjeta de credito</label>
                  <input type="number" id='credit'/>
                  <button>Enviar</button>
              </form>
            </div>
        </MDBRow>
    </MDBContainer>
  )
}
