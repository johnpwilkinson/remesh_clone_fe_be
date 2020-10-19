import React from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Form,
  Button,
  InputGroup,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import ConvoDetails from "./ConvoDetails";

function Convos(props) {
  return props.filteredConvos.map((convo) => (
    <Card style={{ width: "18rem", margin: "40px" }}>
      <Card.Img variant="top" src="intro1.jpg" />
      <Card.Body>
        <Card.Title>
          <a
            href="#"
            onClick={() => {
              props.getConvoDetail(convo.id, convo.title);
            }}
          >
            <h1>{convo.title}</h1>
          </a>
        </Card.Title>
        <Card.Text>
          <h3>{convo.start_date}</h3>
          <p>{convo.id}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  ));
}
export default Convos;
