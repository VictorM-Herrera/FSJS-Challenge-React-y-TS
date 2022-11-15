import { MDBCol, MDBContainer, MDBRow} from 'mdb-react-ui-kit'
import React, { useState } from 'react'

export default function Brand() {
    const [filtrado, setFiltrado]= useState("nada");

  return (
    <><div className='nav-fixed'>
            <MDBContainer fluid className='justify-content-center bg-dark'>
                <MDBRow className='align-items-center'>
                    <MDBCol size='2'>
                        <img src='../images/Crunchyroll-logo.png' height='60' loading='lazy' alt=''/>
                    </MDBCol>
                    <MDBCol size='8' className='d-flex align-items-center'>
                        <input onChange={(e)=> setFiltrado(e.target.value)} value={filtrado} className='form-control' placeholder='Busca anime..' aria-label='Search' type='Search' />
                        <a href={'/home/'+filtrado}>   <button className='btn btn-dark btn-rounded'><i className="fas fa-search"></i></button></a>
                     
                    </MDBCol>
                    <MDBCol size='2' className='d-flex align-items-center gap'>
                        <button className='boton'><i className="fas fa-shopping-cart"></i></button>
                        <button className='boton boton-rojo'><i className="fab fa-gratipay"></i></button>
                    </MDBCol>
                </MDBRow>
            </MDBContainer> 
            </div>
    </>
  )
}
