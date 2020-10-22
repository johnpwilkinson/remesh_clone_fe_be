import React from "react";

function NewButton(props) {
  return (
    <div className="text-center" className="mt-2">
      <a href="#" onClick={props.showModal}>
        <h3 id={props.target}>
          Create New {props.target} {" "}
          {props.activeMess ? " for message: " + props.activeMess : ""}
          {props.activeConvo ? " for Conversation: " + props.activeConvo : ""}
        </h3>
      </a>
    </div>
  );
}

export default NewButton;
