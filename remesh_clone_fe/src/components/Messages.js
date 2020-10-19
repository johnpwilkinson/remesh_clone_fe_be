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

function Messages(props) {
  return props.messages.map((mess) => (
    <div key={mess.id}>
      <a
        href="#"
        onClick={() => {
          props.getMessageDetail(mess.id, mess.message);
        }}
      >
        {mess.message}
      </a>
      <br></br>
      {mess.submission_time}
      <br></br>
      {mess.id}
    </div>
  ));
}
export default Messages;
