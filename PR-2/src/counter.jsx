import { Component } from "react";

class Counter extends Component {
  constructor({ no }) {
    super();
    this.state = {
      cnt: no,
    };
  }
  Inc() {
    this.setState({
      cnt: this.state.cnt + 1,
    });
  }
  Min() {
    this.setState({
      cnt: this.state.cnt - 1,
    });
  }
  Reset() {
    this.setState({
      cnt:0,
    });
  }
  render() {
    return (
      <div align="center">
        {console.log(this.state.cnt)}
        <h1>Counter App</h1>
        <div>
          {
            (this.state.cnt > 0) ? <button
            type="button"
            className="btn btn-success me-3 "
            onClick={() => this.Min()}
          >
            -
          </button>
          :
          <button
            type="button" disabled
            className="btn btn-success me-3 "
            onClick={() => this.Min()}
          >
            -
          </button>
          }
          <button type="button" className="btn border me-3">
            {this.state.cnt}
          </button>
          <button
            type="button"
            className="btn btn-success me-3 "
            onClick={() => this.Inc()}
          >
            +
          </button>
          <br></br>
          <button
            type="button"
            className="btn btn-success mt-3 "
            onClick={() => this.Reset()}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
