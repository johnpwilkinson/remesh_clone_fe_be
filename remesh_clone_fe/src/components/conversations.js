
import React from "react";
import { Link, Route } from "react-router-dom";
import ConvoDetail from "./Convos";

const Conversations = ({ match }, props) => {

    /* Create an array of `<li>` items for each product */
    const linkList = props.conversation.map((convo) => {
      return (
        <li>
          <Link to={`${match.url}/${convo.id}`}>{convo.title}</Link>
        </li>
      );
    });
  
    return (
      <div>
        <div>
          <div>
            <h3> Conversations</h3>
            <ul> {linkList} </ul>
          </div>
        </div>
  
        <Route
          path={`${match.url}/:convoId`}
          render={(props) => <ConvoDetail convo={props.conversation.filter(convo => convo.id === props.currConvoId)}

          />}
        />
        <Route
          exact
          path={match.url}
          render={() => <div>Please select a Conversation.</div>}
        />
      </div>
    );
  };

  export default Conversations