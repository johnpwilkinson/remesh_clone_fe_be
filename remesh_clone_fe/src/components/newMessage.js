import React from "react";


function NewMessage(props) {
   if (props.messages.length > 0) {
     return (
    <div className="text-center">
    <a href="#" onClick={props.showMessageModal}>
      <h3>Create New Message for {props.activeConvo}</h3>
    </a>
    <h3>Messages for {props.activeConvo}</h3>
  </div>
     )
   } return (
    <div className="text-center">
      <a href="#" onClick={props.showMessageModal}>
        <h3>Create New Message for {props.activeConvo}</h3>
      </a>
      <h3>No Messages for {props.activeConvo}</h3>
    </div>
  );
}
export default NewMessage;
