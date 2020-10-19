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

function NewMessage(props) {
  return (
    <div>
      <a href="#" onClick={props.showMessageModal}>
        <h3>New Message for {props.activeConvo}</h3>
      </a>
      <h3>Messages from: {props.activeConvo}</h3>
    </div>
  );
}
export default NewMessage;
