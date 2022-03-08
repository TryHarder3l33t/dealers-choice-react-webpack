import React from "react";
import axios from "axios";

export default class Main extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get("/api/person");
      console.log(data[0]);
    } catch (error) {}
  }
  render() {
    return <h1>Hello World</h1>;
  }
}
