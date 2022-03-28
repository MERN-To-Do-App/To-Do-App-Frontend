import axios from "axios";
import React, { useState } from "react";
import {Link} from 'react-router-dom'
function SignUpForm() {
  const [name, setName] = useState("");
  const [isError, setIsError] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confpass, setconfPass] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(`Registered Successfully:`);
    // console.log(`NAME: ${name}`);
    // console.log(`EMAIL: ${email}`);

    const userinfo = {
      name: name,
      email: email,
      password: pass,
      confirmPassword: confpass,
    };

    axios.post("http://localhost:5000/api/signUp", userinfo).then((res) => {
      console.log(res.data);
      setIsError(res.data.msg || "Registration Successful. Now try logging in");
    });

    setName("");
    setEmail("");
    setPass("");
    setconfPass("");
  };
  const checkpassword = (e) => {
    const confirmPass = e.target.value;
    setconfPass(confirmPass);
    if (pass !== confirmPass) {
      setIsError("Password is not Matched");
    } else {
      setIsError("");
    }
  };

  return (
    <div className="container signup-container">
      <h3 className="signup-text"> Sign Up</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control form-control-sm"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Full Name"
          required
        />

        <input
          className="form-control form-control-sm"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />

        <input
          className="form-control form-control-sm"
          type="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter Password"
          required
        />

        <input
          className="form-control form-control-sm"
          type="Password"
          value={confpass}
          onChange={checkpassword}
          placeholder="Confirm Password"
          required
        />
        <div className="text-danger">{isError}</div>
        <button
          type="submit"
          className="btn btn-lg btn-outline-primary rounded-pill"
        >
          Sign Up
        </button>
        <div class="form-row">
          <div class="form-group col-md-12 foot-text">
            <p>
              Already have an account ?
              <Link to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
