import React from "react";
import axios from "axios";
const url = "https://api.thedogapi.com/v1/images/search?breed_id=";
let imgurl;

class DogImg extends React.Component {
  constructor({ id }) {
    super();
    this.id = id;
    this.state = {
      imgAPI: ""
    };
    // console.log(this.id, imgurl);
  }

  render() {
    imgurl = this.state.imgAPI;
    if (imgurl === undefined) {
      return (
        <div>
          <img
            src=""
            alt="Img Not Available"
            style={{ width: 100, height: 100 }}
          />
        </div>
      );
    } else if (imgurl) {
      return (
        <div>
          {console.log(this.id, imgurl, typeof imgurl)}
          <img src={imgurl.url} alt="" style={{ width: 100, height: 100 }} />
        </div>
      );
    }
  }

  componentDidMount() {
    axios
      .get(`${url}${this.id}`)
      .then((res) => {
        this.setState({ imgAPI: res.data[0] });
      })
      .catch((err) => console.log(err.message));
  }
}
export default DogImg;
