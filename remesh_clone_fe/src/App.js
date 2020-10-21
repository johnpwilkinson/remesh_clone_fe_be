import React from "react";
import axios from "axios";
import Convos from "./components/Convos";
import NaviBar from "./components/navBar";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import ConvoModal from "./components/convoModal";
import MessageModal from "./components/messageModal";
import ThoughtModal from "./components/ThoughtsModal";
import Messages from "./components/Messages";
import Thoughts from "./components/Thoughts";
import NewMessage from "./components/newMessage";
import NewThought from "./components/newThought";
import NewConvo from "./components/newConversation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [],
      messages: [],
      thoughts: [],
      isMessages: false,
      isThoughts: false,
      isOpenConvo: false,
      isOpenMessage: false,
      isOpenThought: false,
      selectedDate: "",
      currConvoId: 0,
      currMessageId: 0,
      search: "",
      activeConvo: "",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/conversations/").then((response) => {
      const conversations = response.data;
      this.setState({ conversations });
    });
  }
  getConvoDetail = (convoId, convoTitle) => {
    console.log(convoId);
    axios
      .get(`http://localhost:8000/api/messages/${convoId}`)
      .then((response) => {
        const messages = response.data;
        this.setState({
          messages: messages,
          activeConvo: convoTitle,
          isMessages: true,
          currConvoId: convoId,
          isThoughts: false,
          thoughts: []
        });
      });
  };
  getMessageDetail = (messId, messTitle) => {
    console.log(messId);
    axios
      .get(`http://localhost:8000/api/thoughts/${messId}`)
      .then((response) => {
        const thoughts = response.data;
        this.setState({
          thoughts: thoughts,
          activeMess: messTitle,
          isThoughts: true,
          currMessageId: messId,
        });
      });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const start_date = event.target.elements.date.value;
    console.log(start_date);
    axios.post("http://localhost:8000/api/conversations/", {
      title: title,
      start_date: start_date,
      isOpenConvo: false,
    });
    axios.get("http://localhost:8000/api/conversations/").then((response) => {
      const conversations = response.data;
      this.setState({ conversations });
    });
  };
  handleMessageFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const message = event.target.elements.message.value;
    const conversation = this.state.currConvoId;
    axios.post("http://localhost:8000/api/messages/", {
      message: message,
      conversation: conversation,
      isOpenMessage: false,
    });
    axios
      .get(`http://localhost:8000/api/messages/${conversation}`)
      .then((response) => {
        const messages = response.data;
        this.setState({ messages });
      });
  };

  handleThoughtFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const thought = event.target.elements.thought.value;
    const message = this.state.currMessageId;
    axios.post("http://localhost:8000/api/thoughts/", {
      thought: thought,
      message: message,
      isOpenThought: false,
    });
    axios
      .get(`http://localhost:8000/api/thoughts/${message}`)
      .then((response) => {
        const thoughts = response.data;
        this.setState({ thoughts });
      });
  };
  showModal = (e) => {
    console.log(e.target.id)
    switch(e.target.id){
      case 'convo':
        this.setState({
          isOpenConvo: true,
        });
        break;
      case 'message':
        this.setState({
          isOpenMessage: true,
        });
        break;
      case 'thought':
        this.setState({
          isOpenThought: true,
        });
        break;
    }
  }
  hideConvoModal = () => {
    this.setState({
      isOpenConvo: false,
    });
  };
  hideMessageModal = () => {
    this.setState({
      isOpenMessage: false,
    });
  };
  hideThoughtModal = () => {
    this.setState({
      isOpenThought: false,
    });
  };


  updateSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  render() {
    let filteredConvos = this.state.conversations.filter((convo) => {
      return (
        convo.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    return (
      <Container fluid>
        <NaviBar search={this.state.search} updateSearch={this.updateSearch} />
        <Container fluid>
          <Row>
            <Col sm={4}>
              <NewConvo
                messages={this.state.conversations}
                showConvoModal={this.showModal}
              />
              <Convos
                filteredConvos={filteredConvos}
                getConvoDetail={this.getConvoDetail}
              />
            </Col>
            <Col sm={4}>
              {this.state.isMessages && (
                <NewMessage
                  activeConvo={this.state.activeConvo}
                  showMessageModal={this.showModal}
                  messages={this.state.messages}
                />
              )}
              {this.state.messages.length > 0 && (
                <div>
                  <Messages
                    messages={this.state.messages}
                    getMessageDetail={this.getMessageDetail}
                  />
                </div>
              )}
            </Col>
            <Col sm={4}>
              {this.state.isThoughts && (
                <NewThought
                  activeMess={this.state.activeMess}
                  showThoughtModal={this.showModal}
                  thoughts={this.state.thoughts}
                  activeConvo={this.state.activeConvo}
                />
              )}
              {this.state.thoughts.length > 0 && (
                <div>
                  <Thoughts thoughts={this.state.thoughts} />
                </div>
              )}
            </Col>
            <ConvoModal
              {...this.state}
              handleFormSubmit={this.handleFormSubmit}
              showConvoModal={this.showConvoModal}
              hideModal={this.hideConvoModal}
            />
            <MessageModal
              {...this.state}
              handleMessageFormSubmit={this.handleMessageFormSubmit}
              showConvoModal={this.showMessageModal}
              hideModal={this.hideMessageModal}
            />
            <ThoughtModal
              {...this.state}
              handleThoughtFormSubmit={this.handleThoughtFormSubmit}
              showConvoModal={this.showThoughtModal}
              hideModal={this.hideThoughtModal}
            />
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
