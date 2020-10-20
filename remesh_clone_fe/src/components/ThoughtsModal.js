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


function ThoughtModal(props) {
  return (
    <Modal show={props.isOpenThought} onHide={props.hideModal}>
      <Modal.Header>
        <Modal.Title>New Thought for {props.activeConvo} / {props.activeMess}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.handleThoughtFormSubmit}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Thought</Form.Label>
            <Form.Control as="textarea" rows="1" maxLength="100" name="thought" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ThoughtModal