import React from "react";
import ContadorWrapper from "./Contador.Style";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 0,
      minute: 0,
      second: 0,
      start: false,
      buttonOn: true,
      buttonOff: false
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
    this.setState({
      buttonOn: true,
      buttonOff: false
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.setState({
      buttonOn: false,
      buttonOff: true
    });
  }

  tick() {
    this.setState({ second: this.state.second - 1 });
    if (this.state.second < 1) {
      this.setState({
        minute: this.state.minute - 1,
        second: 59
      });
    }

    if (this.state.minute === 0 && this.state.second === 1) {
      this.componentWillUnmount();
      this.setState({
        start: false
      });
      alert("Tempo Esgotado!");
    }
  }

  restart() {
    this.setState({
      minute: this.state.limit,
      second: 0
    });
    this.componentDidMount();
  }

  start() {
    if (this.state.limit !== 0) {
      this.setState({
        minute: this.state.limit,
        second: 0,
        start: true
      });
      this.componentWillUnmount();
      this.componentDidMount();
    }
    else {
      this.componentWillUnmount();
      this.setState({
        minute: 0,
        second: 0
      });
    }
  }

  handleChange(event) {
    let value = event.target.value;
    if (value !== "") {
      this.setState({
        // eslint-disable-next-line
        limit: parseInt(value)
      });
    }
  }

  render() {
    return (
      <ContadorWrapper>
        <div hidden={this.state.start} style={{ textAlign: 'center' }}>
          <select onChange={e => this.handleChange(e)}>
            <option value="">--Selecione--</option>
            <option value="5min">5 minutos</option>
            <option value="10min">10 minutos</option>
            <option value="20min">20 minutos</option>
            <option value="30min">30 minutos</option>
            <option value="45min">45 minutos</option>
            <option value="60min">60 minutos</option>
          </select>
          <button onClick={() => this.start()}>iniciar</button>
        </div>
        <div hidden={!this.state.start} className="div-align">
          <div className="background">
            <p className="timer">
              {this.state.minute < 10 ? "0" : false}
              {this.state.minute}:{this.state.second < 10 ? "0" : false}
              {this.state.second}
            </p>
          </div>
          <button
            hidden={this.state.buttonOn}
            onClick={() => this.componentDidMount()}
          >
            <span className="start"> on </span>
          </button>
          <button hidden={this.state.buttonOn} onClick={() => this.restart()}>
            <span className="start"> restart </span>
          </button>
          <button
            hidden={this.state.buttonOff}
            onClick={() => this.componentWillUnmount()}
          >
            <span className="stop"> off </span>
          </button>
        </div>
      </ContadorWrapper>
    );
  }
}
