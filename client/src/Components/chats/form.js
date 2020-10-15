import React, { Component } from "react";

/* Import Components */
import Input from "./formComponents/Input";
import TextArea from "./formComponents/TextArea";
import Button from "./formComponents/Button";
import request from 'superagent';
import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newRoom: {
        name: "",
        about: ""
      },
    };

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newRoom: {
          ...prevState.newRoom,
          name: value
        }
      }),
      () => console.log(this.state.newRoom)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newRoom: {
          ...prevState.newRoom,
          about: value
        }
      }),
      () => console.log(this.state.newRoom)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newRoom: {
          ...prevState.newRoom,
          [name]: value
        }
      }),
      () => console.log(this.state.newRoom)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    // let RoomData = this.state.newRoom;

    // fetch("http://example.com", {
    //   method: "POST",
    //   body: JSON.stringify(RoomData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // }).then(response => {
    //   response.json().then(data => {
    //     console.log("Successful" + data);
    //   });
    // });
    // const data = {
    //   newRoom: this.state.newRoom,
    // };
    // console.log(data)
    axios.post('/form',this.state.newRoom).then(res=>console.log(res))
    // request
    //     .post('http://localhost:5000/form')
    //     .send(data)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //       if (err) {
    //         console.log('Error occured');
    //       } else {
    //         console.log('Success');
    //       }
    //     });
    }

    render() {
        return (
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Room Name"}
          name={"name"}
          value={this.state.newRoom.name}
          placeholder={"Enter the name of the room here"}
          handleChange={this.handleInput}
        />{" "}
        <TextArea
          title={"Room Description"}
          rows={5}
          value={this.state.newRoom.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Describe the details about the room"}
        />
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default Form;
