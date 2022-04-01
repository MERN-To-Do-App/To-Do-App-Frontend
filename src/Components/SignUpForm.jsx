import axios from "axios";
import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom'
function SignUpForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confpass, setconfPass] = useState("");
<<<<<<< HEAD
  const [isError, setIsError] = useState("");

=======
  const history = useHistory()
>>>>>>> d9069de1392dfd363a85c6c67aef1ee3129c5449
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const userinfo = {
      name: name,
      email: email,
      password: pass,
      confirmPassword: confpass
    };

    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/signUp`, userinfo)
    .then((res) => {
      const id = res.data.user._id
      setIsError(res.data.msg ||"Registration Successful. Now try logging in");
      history.push(`/user/${id}`)
    })
    .catch((error)=>{
      setIsError(error.response.data.error.message);
    })

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
        <div className="error-text text-danger">{isError}</div>
        <button
          type="submit"
          className="btn btn-lg btn-outline-dark rounded-pill"
        >
          Sign Up
        </button>
        <div className="form-row">
          <div className="form-group col-md-12 foot-text">
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
