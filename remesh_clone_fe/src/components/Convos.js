import React from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import moment from "moment";

function Convos(props) {
  return props.filteredConvos.map((convo) => (
    <Card style={{ width: "18rem", margin: "40px" }}>
      <Card.Body class="cardBody">
        <a
          href="#"
          onClick={() => {
            props.getConvoDetail(convo.id, convo.title);
          }}
        >
          <h1 className="ml-2">{convo.title}</h1>
        </a>
        <p className="text-right pr-2">
          Start Date: {moment(convo.start_date).add(365, "day").format("LL")}
        </p>
      </Card.Body>
    </Card>
  ));
}
export default Convos;
