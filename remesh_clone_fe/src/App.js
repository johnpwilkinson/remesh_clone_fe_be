import React from "react";
import axios from "axios";
import Convos from "./components/conversations/Convos";
import NaviBar from "./components/navbar/navBar";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import ConvoModal from "./components/conversations/convoModal";
import MessageModal from "./components/messages/messageModal";
import ThoughtModal from "./components/thoughts/ThoughtsModal";
import Messages from "./components/messages/Messages";
import Thoughts from "./components/thoughts/Thoughts";
import NewButton from "./components/utils/newButton";
import { BASE_URL, CONVERSATIONS, MESSAGES, THOUGHTS } from './components/utils/url'

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
      activeMess:""
    };
  }

  componentDidMount() {
    axios.get(BASE_URL+CONVERSATIONS).then((response) => {
      const conversations = response.data;
      this.setState({ conversations });
    });
  }
  getConvoDetail = (convoId, convoTitle) => {
    axios
      .get(BASE_URL+MESSAGES+convoId)
      .then((response) => {
        const messages = response.data;
        this.setState({
          messages: messages,
          activeConvo: convoTitle,
          isMessages: true,
          currConvoId: convoId,
          isThoughts: false,
          thoughts: [],
        });
      });
  };
  getMessageDetail = (messId, messTitle) => {
    axios
      .get(BASE_URL+THOUGHTS+messId)
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
    axios.post(BASE_URL+CONVERSATIONS, {
      title: title,
      start_date: start_date,
      isOpenConvo: false,
    }).then(axios.get(BASE_URL+CONVERSATIONS).then((response) => {
      const conversations = response.data;
      this.setState({ conversations });
    }))
    
  };
  handleMessageFormSubmit = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    const conversation = this.state.currConvoId;
    axios.post(BASE_URL+MESSAGES, {
      message: message,
      conversation: conversation,
      isOpenMessage: false,
    });
    axios
      .get(BASE_URL+MESSAGES+conversation)
      .then((response) => {
        const messages = response.data;
        this.setState({ messages });
      });
  };

  handleThoughtFormSubmit = (event) => {
    event.preventDefault();
    const thought = event.target.elements.thought.value;
    const message = this.state.currMessageId;
    axios.post(BASE_URL+THOUGHTS, {
      thought: thought,
      message: message,
      isOpenThought: false,
    });
    axios
      .get(BASE_URL+THOUGHTS+message)
      .then((response) => {
        const thoughts = response.data;
        this.setState({ thoughts });
      });
  };
  showModal = (e) => {
    switch (e.target.id) {
      case "Conversation":
        this.setState({
          isOpenConvo: true,
        });
        break;
      case "Message":
        this.setState({
          isOpenMessage: true,
        });
        break;
      case "Thought":
        this.setState({
          isOpenThought: true,
        });
        break;
    }
  };
  hideConvoModal = () => {
    axios.get(BASE_URL+CONVERSATIONS).then((response) => {
      const conversations = response.data;
      this.setState({ 
        conversations: conversations,
        isOpenConvo: false,
       });
    })
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
              <NewButton showModal={this.showModal} target={"Conversation"} />
              <Convos
                conversations={this.state.conversations}
                filteredConvos={filteredConvos}
                getConvoDetail={this.getConvoDetail}
              />
            </Col>
            <Col sm={4}>
              {this.state.isMessages && (
                <div>
                  <NewButton
                    showModal={this.showModal}
                    target={"Message"}
                    activeConvo={this.state.activeConvo}
                  />
                  <Messages
                    messages={this.state.messages}
                    getMessageDetail={this.getMessageDetail}
                    activeConvo={this.state.activeConvo}
                  />
                </div>
              )}
            </Col>
            <Col sm={4}>
              {this.state.isThoughts && (
                <div>
                  <NewButton
                    showModal={this.showModal}
                    target={"Thought"}
                    activeMess={this.state.activeMess}
                    activeConvo={this.state.activeConvo}
                  />
                  <Thoughts
                    thoughts={this.state.thoughts}
                    activeMess={this.state.activeMess}
                    activeConvo={this.state.activeConvo}
                  />
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
