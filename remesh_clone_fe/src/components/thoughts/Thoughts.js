import React from "react";
import axios from "axios";
import { Card, ListGroup } from "react-bootstrap";
import moment from "moment";

function Thoughts(props) {
  return (
    <>
      {props.thoughts.length > 0 ? (
        props.thoughts.map((thought) => (
          <Card
            style={{ width: "20rem" }}
            key={thought.id}
            className="mx-auto"
            key={thought.id}
          >
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h5>{thought.thought}</h5>
                <br></br>
                <p>
                  Submitted on:
                  {moment(thought.submission_time).add(365, "day").format("LL")}
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))
      ) : (
        <h5>
          No Thoughts for {props.activeMess} / {props.activeConvo}{" "}
        </h5>
      )}
    </>
  );
}
export default Thoughts;
