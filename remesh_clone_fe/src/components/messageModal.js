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


function MessageModal(props) {
  return (
    <Modal show={props.isOpenMessage} onHide={props.hideModal}>
      <Modal.Header>
        <Modal.Title>New Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.handleMessageFormSubmit}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="1" maxLength="100" name="message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MessageModal