import React from "react";
import { Form, FormControl } from "react-bootstrap";

export default function SearchBox (props) {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search Conversations"
        className="mr-sm-2"
        value={props.search}
        onChange={props.updateSearch}
        name="searchbox"
      />
    </Form>
  );
};

