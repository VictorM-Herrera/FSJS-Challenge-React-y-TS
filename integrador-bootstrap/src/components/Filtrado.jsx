import { Col, Container, Dropdown, Row } from "react-bootstrap";


export default function Filtrado() {
  return (
        <Container fluid>
            <Row>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        <i class="fas fa-sort-amount-down-alt"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Anime</Dropdown.Item>
                            <Dropdown.Item href="#">Merch</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item href="#">FaQ</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
  )
}
