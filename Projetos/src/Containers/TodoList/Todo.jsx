import React, { Component } from "react";
import TodoWrapper from "./Todo.Style";
import List from "./List";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.term !== "") {
      this.setState({
        term: "",
        items: [...this.state.items, this.state.term]
      });
    }
  };

  render() {
    return (
      <TodoWrapper>
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>List</button>
        </form>
        <List items={this.state.items} />
      </div>
      </TodoWrapper>
    );
  }
}

export default Todo;
