import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import Anime from './Anime'
import Merch from './Merch'
import { useParams } from 'react-router-dom'

export default function HomeNoFaq() {
    let {filtrado}= useParams();

  return (
    <MDBContainer fluid>
    <Anime fil={filtrado}/>
    <Merch fil={filtrado}/>
    </MDBContainer>
  )
}
