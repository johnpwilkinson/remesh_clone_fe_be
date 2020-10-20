import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import ConvoDetails from "./ConvoDetails";
import moment from "moment";

function Messages(props) {
  return props.messages.map((mess) => (
    <Card style={{ width: "20rem" }} key={mess.id} className="mx-auto">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <a
            href="#"
            onClick={() => {
              props.getMessageDetail(mess.id, mess.message);
            }}
          >
            <h5>{mess.message}</h5>
          </a>
          <p>
            Submitted on:
            {moment(mess.submission_time).add(365, "day").format("LL")}
          </p>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  ));
}
export default Messages;
