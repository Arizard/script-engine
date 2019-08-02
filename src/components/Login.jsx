import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Callout,
  Spinner,
  FormGroup,
  InputGroup
} from "@blueprintjs/core";
import fire from "../config/Fire";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      flash: null,
      flashIntent: null,
      loading: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    this.setState({ loading: true });
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.setState({ loading: false });
      })
      .catch(error => {
        const { message } = error;
        this.setState({
          flash: message,
          flashIntent: "danger",
          loading: false
        });
      });
  };

  signup = e => {
    e.preventDefault();
    this.setState({ loading: true })
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
        this.setState({ loading: false })
      })
      .catch(error => {
        console.log(error);
        const { message } = error;
        this.setState({
          flash: message,
          flashIntent: "danger",
          loading: false
        });
      });
  };
  render() {
    return (
      <div className="row">
        <div className="col-3" />
        <div className="col-6">
          {this.state.loading ? <Spinner size={Spinner.SIZE_SMALL} /> : ""}
          {this.state.flash ? (
            <Callout intent={this.state.flashIntent}>
              {this.state.flash}
            </Callout>
          ) : (
            ""
          )}
          <br />
          <form>
            <FormGroup
              label="Email Address"
              labelFor="inputEmail1"
              labelInfo="(required)"
            >
              <InputGroup
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                className="form-control"
                id="inputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup
              label="Password"
              labelFor="inputpassword1"
              labelInfo="(required)"
            >
              <InputGroup
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                className="form-control"
                id="inputPassword1"
                placeholder="Password"
              />
            </FormGroup>
            <ButtonGroup>
              <Button onClick={this.login} intent="primary" text="Log In" />
              <Button onClick={this.signup} text="Sign Up" />
            </ButtonGroup>
          </form>
          <p className="bp3-text-muted">
            We'll never share your password with anyone else.
          </p>
        </div>
        <div className="col-3" />
      </div>
    );
  }
}
