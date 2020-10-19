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

function Thoughts(props) {
  return props.thoughts.map((thought) => (
    <div key={thought.id}>
      {thought.thought}
      <br></br>
      {thought.submission_time}
    </div>
  ))

}
export default Thoughts;


