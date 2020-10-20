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

function NewConvo(props) {
  if (props.messages.length > 0) {
    return (
      <div className="text-center" className="mt-2" >
        <a href="#" onClick={props.showConvoModal}>
          <h3>Create New Conversation</h3>
        </a>
      </div>
    );
  }
  return (
    <div className="text-center" className="mt-2">
      <a href="#" onClick={props.showConvoModal}>
        <h3>Create New Conversation</h3>
      </a>
      <h3>No Conversations yet...</h3>
    </div>
  );
}
export default NewConvo;
