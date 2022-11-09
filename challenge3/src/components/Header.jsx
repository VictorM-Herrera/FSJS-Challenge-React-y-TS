import React from 'react'
import { Container, Tabs, Tab, Row } from 'react-bootstrap'
import Productos from './Productos'
import Punto2 from './Punto2'
import Punto5 from './Punto5'
import Selector from './Selector'

export default function Header() {
  return (
    <Container fluid className='py-4'>
        <Row className='text-center'>
          <h1>MOONLIGTHER</h1>
        </Row>
        <Row className='justiy-content-center'>
          <NavBar/>
        </Row>
    </Container>
  )
}

function NavBar()
{
  return(
    <Tabs fill variant='tabs' defaultActiveKey="tab-1" className='mb-1 p-0'>
      <Tab eventKey="tab-1" title="Productos">
        <Selector/>
       <Productos/>
      </Tab>
      <Tab eventKey="tab-2" title="Punto2">
       <Punto2/>
      </Tab>
      <Tab eventKey="tab-3" title="Que fecha es?">
       <Punto5/>
      </Tab>
    </Tabs>
  )
}