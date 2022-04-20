import "./styles.css";
import React from "react";
import Display from "./Display";
const url = "https://api.thedogapi.com/v1/breeds/search?name=";
let keyword;

class DogAPI extends React.Component {
  constructor(props) {
    super();

    this.state = {
      APIData: "",
      filtered: ""
    };
  }

  handleChange = (event) => {
    keyword = event.target.value;
    this.filterBreed(keyword);
  };

  filterBreed = (querystr) => {
    var output = this.state.APIData.filter((data) => {
      return data.name.toLowerCase().indexOf(querystr.toLowerCase()) > -1;
    });
    if (keyword) {
      this.setState({ filtered: output });
    } else {
      this.setState({ filtered: "" });
    }
  };

  render() {
    return (
      <div>
        <input placeholder="search" onChange={this.handleChange} />
        <Display data={this.state.filtered} />
      </div>
    );
  }

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ APIData: data }));
  }
}
export default DogAPI;
