import React from "react";


function NewThought(props) {
  if (props.thoughts.length > 0) {
    return (
      <div className="text-center">
        <a href="#" onClick={props.showThoughtModal}>
    <h3 id="thought">Create New Thought for {props.activeConvo} / {props.activeMess}</h3>
        </a>
        <h5>Thoughts for {props.activeMess}</h5>
      </div>
    );
  }
  return (
    <div className="text-center">
      <a href="#" onClick={props.showThoughtModal}>
      <h5 id="thought">Create New Thought for {props.activeConvo} / {props.activeMess}</h5>
      </a>
      <h3>No Thoughts for {props.activeMess}</h3>
    </div>
  );
}
export default NewThought;
