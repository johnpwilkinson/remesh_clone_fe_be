import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import React from "react";
import SearchBox from "./search";

function NaviBar(props) {

    return (
      <Navbar fluid  expand="lg" className="remeshBlue" >
        <Navbar href="#home" className="remeshLogo">ReMesh : Conversations</Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
            
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search Conversations" className="mr-sm-2" value={props.search} onChange={props.updateSearch} name="searchbox" />
            <Button className="remeshSearch" variant="outline-light">Search</Button> */}
            <SearchBox search={props.search} updateSearch={props.updateSearch} />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }

export default NaviBar
