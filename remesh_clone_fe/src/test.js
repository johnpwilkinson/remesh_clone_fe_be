import React, { Component } from "react";
import todosList from "./todos.json";
import { Route, NavLink } from "react-router-dom";
import TodoList from "./components/TodoList";
import ConvoDetail from "./components/Convos";

class App extends Component {
  state = {
    todos: todosList,
    count: ""
  };

  
  render() {
    return (
      <section className="container">
        <Route
          exact
          path="/"
          render={() => (
            <TodoList
              todos={this.state.todos}
              handleToggleComplete={this.handleToggleComplete}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route
          path="/detail"
          render={() => (
            <ConvoDetail
              todos={this.state.activeConvo.filter(convo => convo.activeConvo === true)}
              handleToggleComplete={this.handleToggleComplete}
              handleDelete={this.handleDelete}
            />
          )}
        />
         <Col sm={4}>
              {this.state.conversations.map((convo) => (
                <Card style={{ width: "18rem", margin: "40px" }}>
                  <Card.Img variant="top" src="intro1.jpg" />
                  <Card.Body>
                    <Card.Title>
                      <NavLink
                        to="/convodetail"
                        onClick={() => {
                          this.getConvoDetail(convo.id, convo.title);
                        }}
                      >
                        <h1>{convo.title}</h1>
                      </NavLink>
                    </Card.Title>
                    <Card.Text>
                      <h3>{convo.start_date}</h3>
                      <p>{convo.id}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Col>
        <footer className="footer">
          <ul className="filters">
            <li>
              <NavLink exact to="/" activeClassName="selected">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/active" activeClassName="selected">
                Active
              </NavLink>
            </li>
            <li>
              <NavLink to="/completed" activeClassName="selected">
                Completed
              </NavLink>
            </li>
          </ul>
          <button className="clear-completed" onClick={this.handleClear}>
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

export default App;
