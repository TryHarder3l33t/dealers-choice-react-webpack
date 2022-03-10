import React from "react";
import axios from "axios";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      theData: [],
    };
    // this.state = {
    //   character: "ex. Me",
    //   actor: "ex. Me Again",
    //   role: "ex. Student",
    //   occupation: "ex. Coolest Ice Cube",
    // };

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
        <h1>Hello World Jacob</h1>
        <ul>
          {theData.map((cast) => (
            <li key={cast.id}>{cast.role}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            Character:
            <input
              name="character"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Actor:
            <input
              name="actor"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Role:
            <input
              name="role"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Occupation:
            <input
              name="occupation"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

/* <ul>
{cheers.map((cast) => (
  <li>{cast.actor}</li>
))}
</ul> */

/*
const person = {
      character: "batman",
      actor: "robin",
      role: "superhero",
      occupation: "cop",
    };
*/
