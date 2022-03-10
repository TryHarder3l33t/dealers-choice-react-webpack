import React from "react";
import axios from "axios";
import Cast from "./Cast";
import TheForm from "./Form";
import OnePerson from "./OnePerson";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      theData: [],
      oneData: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get("/api/person");
      this.setState({ theData: data });
    } catch (error) {}
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    await axios.post("/api/person", this.state);
    this.setState({
      character: "ex. Me",
      actor: "ex. Me Again",
      role: "ex. Student",
      occupation: "ex. Cool As A Ice Cube",
    });
    event.preventDefault();
  }
  async handleSelect(id) {
    try {
      const { data } = await axios.get(`/api/person/${id}`);
      this.setState({
        oneData: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async goBack() {
    try {
      this.setState({
        oneData: {},
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { theData } = this.state;
    return (
      <div>
        <h1>Cheers</h1>
        {!this.state.oneData.id ? (
          <div>
            <Cast theData={theData} handleSelect={this.handleSelect} />
            <TheForm
              value={this.state.value}
              onChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        ) : (
          <OnePerson theData={this.state.oneData} goBack={this.goBack} />
        )}
      </div>
    );
  }
}
