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

function NewThought(props) {
  return (
    <div>
      <a href="#" onClick={props.showThoughtModal}>
        <h3>New Thought for {props.activeMess}</h3>
      </a>
      <h3>Thoughts from: {props.activeMess}</h3>
    </div>
  );
}
export default NewThought;
