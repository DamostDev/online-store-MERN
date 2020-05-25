import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import fire from "./Firebase";
import { ProductConsumer } from "../ContextApi";

import loginImg from "./login-img.png";
import logoTypeImg from "./logotypewhite.png";

class UserLogin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error);
      });
  }

  // handleSignUp(e) {
  //   e.preventDefault();
  //   fire
  //     .auth()
  //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { onSignUp, hasSignedUp } = value;

            return (
              <div className="user-login-container">
                <div className="login-img">
                  <img src={loginImg} alt="Login Image" />
                </div>
                <div className="form-container">
                  <form onSubmit={onSignUp}>
                    <div className="logo-type">
                      <img src={logoTypeImg} alt="LogoType" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email</label>
                      <input
                        value={this.state.email}
                        onChange={this.handleChange}
                        type="email"
                        name="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        name="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>

                    <div className="btn-holder">
                      <NavLink to="/home">
                        <button
                          onClick={this.login}
                          type="submit"
                          className="btn-details"
                        >
                          Login
                        </button>
                      </NavLink>

                      <NavLink to="/home">
                        <button
                          onClick={() => onSignUp()}
                          type="submit"
                          style={{ marginLeft: "25px" }}
                          className="btn-details"
                        >
                          Signup
                        </button>
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
export default UserLogin;
