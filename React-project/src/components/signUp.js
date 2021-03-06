import React, { useState, useContext } from "react";
import { SignUpContext } from "../contexts/signUpContext";
import { Link } from "react-router-dom";
const SignUp = () => {
  const addUser = useContext(SignUpContext);
  const [user, setUser] = useState({
    fname: null,
    lname: null,
    email: null,
    p1: null,
    p2: null,
    freelancer: true,
  });
  const handleSubmit = () => {
    // if(user.p1===user.p2)
    //     addUser(user.fname,user.lname,user.email,user.p1,user.p2,user.freelancer);
    // else
    //     alert("Passwords do not match. Please try again");
  };
  return (
    <div>
      <div className="Homepage">
        <h1 className="text-1">
          A Platform for the Creative to Market Their Talent.
        </h1>
        <br></br>
        <div className="text-2">
          Find your artist. Market your talent. Always be looking for new
          opportunities.
        </div>
        <Link to="/find-talent-it">
          {" "}
          <button className="button-1">
            {" "}
            <li> Find Work </li>{" "}
          </button>{" "}
        </Link>
        <Link to="/find-work-it">
          {" "}
          <button className="button-2">
            {" "}
            <li> Find Talent </li>{" "}
          </button>{" "}
        </Link>
      </div>
      <div className="signUpCard">
        <h1 className="signUpTitle">Sign Up</h1>
        <form onSubmit="handleSubmit">
          <input
            className="signUpFirstName"
            value={user.fname}
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={(e) => setUser({ ...user, fname: e.target.value })}
          />
          <input
            className="signUpFirstName"
            value={user.lname}
            id="LastName"
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => setUser({ ...user, lname: e.target.value })}
          />
          <input
            className="signUpFirstName"
            value={user.email}
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            className="signUpFirstName"
            value={user.p1}
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, p1: e.target.value })}
          />
          <input
            className="signUpFirstName"
            value={user.p2}
            id="password2"
            name="password2"
            placeholder="Re-enter Password"
            onChange={(e) => setUser({ ...user, p2: e.target.value })}
          />
          <label> I want to:</label>
          <div className="radio1">
            <input
              type="radio"
              className="signUpFree"
              value="Yes"
              name="option"
              onClick={(e) => setUser({ ...user, freelancer: true })}
            />{" "}
            <label className="signUpFree" for="option">
              Work as a Freelancer
            </label>
            <div className="divider" />
            <input
              type="radio"
              className="signUpEmp"
              value="No"
              name="option"
              onClick={(e) => setUser({ ...user, freelancer: false })}
            />{" "}
            <label className="signUpEmp" for="option">
              Hire for a Project
            </label>
          </div>

          <br />
          <br />

          <button
            type="submit"
            className="signUpAction"
            onClick={handleSubmit()}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
