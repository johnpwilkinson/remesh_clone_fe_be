import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Modal,
    Form,
    Button,
    InputGroup,
  } from "react-bootstrap";

import DatePickerComponent from './DatePicker'

function ConvoModal(props) {
  return (
    <Modal show={props.isOpenConvo} onHide={props.hideModal}>
      <Modal.Header>
        <Modal.Title>New Conversation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.handleFormSubmit}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Title</Form.Label>
            <Form.Control as="textarea" rows="1" maxLength="100" name="title" />
            <DatePickerComponent name="date" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ConvoModal