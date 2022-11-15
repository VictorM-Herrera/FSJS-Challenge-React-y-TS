import { Col, Container, Dropdown, Row } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


export default function Filtrado() {
  return (
    <div className="padding-top">
        <Container fluid>
            <Row>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        <i class="fas fa-sort-amount-down-alt"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/">Todos</Dropdown.Item>
                            <Dropdown.Item href="/anime">Anime</Dropdown.Item>
                            <Dropdown.Item href="/merch">Merch</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item href="/faq">FaQ</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
        </div>
  )
}
