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
   if (props.messages.length > 0) {
     return (
    <div className="text-center">
    <a href="#" onClick={props.showMessageModal}>
      <h3>Create New Message for {props.activeConvo}</h3>
    </a>
    <h3>Messages for {props.activeConvo}</h3>
  </div>
     )
   } return (
    <div className="text-center">
      <a href="#" onClick={props.showMessageModal}>
        <h3>Create New Message for {props.activeConvo}</h3>
      </a>
      <h3>No Messages for {props.activeConvo}</h3>
    </div>
  );
}
export default NewMessage;
