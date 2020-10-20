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
  if (props.thoughts.length > 0) {
    return (
      <div className="text-center">
        <a href="#" onClick={props.showThoughtModal}>
    <h3>Create New Thought for {props.activeConvo} / {props.activeMess}</h3>
        </a>
        <h5>Thoughts for {props.activeMess}</h5>
      </div>
    );
  }
  return (
    <div className="text-center">
      <a href="#" onClick={props.showThoughtModal}>
      <h5>Create New Thought for {props.activeConvo} / {props.activeMess}</h5>
      </a>
      <h3>No Thoughts for {props.activeMess}</h3>
    </div>
  );
}
export default NewThought;
