import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Accordion } from "react-bootstrap";


export default function FaQ() {
  return (
    <MDBContainer>
        <MDBRow>
            <div className="preguntas">
                <h2>Preguntas Frecuentes</h2>
            </div>
        </MDBRow>
        <MDBRow className="justify-content-center">
            <Accordion defaultActiveKey={0} flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><i class="far fa-question-circle"></i> - Pregunta seria?</Accordion.Header>
                    <Accordion.Body>
                        <div className="acordion-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident placeat sit non quae quo molestiae illum natus. Voluptatum recusandae vel, hic nesciunt perferendis ipsum consectetur praesentium possimus eos esse exercitationem!
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><i class="far fa-question-circle"></i> - Pregunta seria?</Accordion.Header>
                    <Accordion.Body>
                    <div className="acordion-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident placeat sit non quae quo molestiae illum natus. Voluptatum recusandae vel, hic nesciunt perferendis ipsum consectetur praesentium possimus eos esse exercitationem!
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><i class="far fa-question-circle"></i> - Pregunta seria?</Accordion.Header>
                    <Accordion.Body>
                    <div className="acordion-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident placeat sit non quae quo molestiae illum natus. Voluptatum recusandae vel, hic nesciunt perferendis ipsum consectetur praesentium possimus eos esse exercitationem!
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </MDBRow>
        </MDBContainer>
  )
}
