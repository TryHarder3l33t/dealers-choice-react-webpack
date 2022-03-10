import React from "react";
import axios from "axios";
import Cast from "./Cast";
import TheForm from "./Form";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      theData: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get("/api/person");
      this.setState({ theData: data });
      console.log(this.state);
    } catch (error) {}
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  async handleSubmit(event) {
    console.log(this.state);
    await axios.post("/api/person", this.state);
    this.setState({
      character: "ex. Me",
      actor: "ex. Me Again",
      role: "ex. Student",
      occupation: "ex. Coolest Ice Cube",
    });
    event.preventDefault();
  }

  render() {
    const { theData } = this.state;
    return (
      <div>
        <h1>Cheers</h1>
        <Cast theData={theData} />
        <TheForm
          value={this.state.value}
          onChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
