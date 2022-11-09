import React from 'react'
import {Container, Row, Col, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

export default function Productos() {
  return(
    <Container>
        <Row>
          <Col md>
            <GeneraCard/>
          </Col>
          <Col md>
            <GeneraCard/>
          </Col>
          <Col md>
            <GeneraCard/>
          </Col>
        </Row>
        <Row>
        <Col md>
            <GeneraCard/>
          </Col>
          <Col md>
            <GeneraCard/>
          </Col>
          <Col md>
            <GeneraCard/>
          </Col>
        </Row>
        <Row>
        <Col md>
            <GeneraCard/>
          </Col>
          <Col md>
            <GeneraCard/>
          </Col>
          <Col md>
            <GeneraCard/>
          </Col>
        </Row>
    </Container>
  )
}

function GeneraCard()
{
  return (
    <Card className='mt-5'>
      <Card.Img src="https://picsum.photos/200/100"/>
      <Card.Body>
        <Card.Title className='text-center'>
            Titulo Producto
        </Card.Title>
        <Container>
          <Card.Text className='text-justify'>
           
          </Card.Text>          
        </Container>
        <Card.Text className='text-justify'>
        </Card.Text>
        <Container className='d-flex justify-content-center'>
          <Card.Text>
            100$
          </Card.Text>
          <Button variant='outline-success' size='sm'>Comprar</Button>
        </Container>
      </Card.Body>
    </Card>
  )
}