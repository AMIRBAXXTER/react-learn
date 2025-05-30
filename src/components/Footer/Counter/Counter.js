import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      inputValue: "",
      isOnce: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  increment = (event, isOnce = true) => {
    if (isOnce) {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    } else {
      let { inputValue } = this.state;
      if (+inputValue) {
        this.setState((prevState) => ({
          count: prevState.count + +inputValue,
          inputValue: "",
        }));
      } else {
        alert("لطفا یک عدد وارد کنید");
      }
    }
  };

  changeIncrement = () => {
    this.setState({ isOnce: !this.state.isOnce });
  };

  render() {
    return (
      <div>
        <h1>{this.props.counterName}</h1>
        <h2>{this.state.count > 20 ? "more than 20" : "less than 20"}</h2>
        <h2>Count: {this.state.count}</h2>
        <label htmlFor="checkbox">add once</label>
        <input type="checkbox" id="checkbox" value={this.state.isOnce} onChange={this.changeIncrement} />
        <hr />
        {this.state.isOnce ? (
          <button onClick={this.increment}>Increment once</button>
        ) : (
          <div>
            <button onClick={(event) => this.increment(event, false)}>
              Increment
            </button>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              placeholder="عدد وارد کن"
            />
          </div>
        )}
      </div>
    );
  }
}
