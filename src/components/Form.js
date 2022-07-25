import React, { useEffect, useRef, useState } from "react";
import FormInput from "./FormInput.js";
import "./styling/Form.css";
import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";
import { mdiGithub } from "@mdi/js";

function Form(props) {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const phoneNumber = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const [state, setState] = useState({ password: "", confirmPassword: "" });
  const [passwordMessage, setPasswordMessage] = useState("");

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    const handlePasswordMatching = () => {
      if (state.password === "" && state.confirmPassword === "") {
        setPasswordMessage("");
      } else if (state.password !== state.confirmPassword) {
        console.log("passwords no longer equal");
        setPasswordMessage("** Passwords Do Not Match");
      } else if (state.password === state.confirmPassword) {
        setPasswordMessage("Passwords Match");
      }
    };
    console.log(`password: ${state.password}`);
    console.log(`confirm password: ${state.confirmPassword}`);
    handlePasswordMatching();
  }, [state]);

  return (
    <div className="form">
      <a href="https://linktr.ee/kurtisiveycodes">
        <Icon
          alt="linkTree media link"
          className="form__linkTree"
          path={mdiAccountCircle}
        />
        <div className="hide">
          <div className="linkDescription">Access to my social media</div>
          <div className="squareRotated"></div>
        </div>
      </a>

      <a href="https://github.com/Kitsunebackfire/signUpForm2responsive">
        <Icon
          alt="github repository link"
          className="form__github"
          path={mdiGithub}
        />
        <div className="hide">
          <div className="linkDescription">
            Access to this project's github repo
          </div>
          <div className="squareRotated"></div>
        </div>
      </a>

      <div className="form__mainContainer">
        <div
          className="form__serviceMessage"
          onClick={() => console.log(password.current.classList)}
        >
          This is not a real online service! You know you need something like
          this in your life to help you realize your deepest dreams.
          <br /> Sign up <em>now</em> to get started
          <br />
          <br /> You <em>know</em> you want to!
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.checkPassword(e);
          }}
          className="form__formContainer"
        >
          <div className="form__inputContainer">
            <div className="form__letsDoThis">LET'S DO THIS!</div>
            <FormInput
              ref={firstName}
              id={"firstName"}
              labelText={"FIRST NAME"}
              placeholder={"John"}
              type={"text"}
            />
            <FormInput
              ref={lastName}
              id={"lastName"}
              labelText={"LAST NAME"}
              placeholder={"DOE"}
              type={"text"}
            />
            <FormInput
              ref={email}
              id={"email"}
              labelText={"EMAIL"}
              placeholder={"email@gmail.com"}
              type={"email"}
            />
            <FormInput
              ref={phoneNumber}
              id={"phoneNumber"}
              labelText={"PHONE NUMBER"}
              placeholder={"123-456-7890"}
              type={"tel"}
            />
            <FormInput
              ref={password}
              id={"password"}
              labelText={"PASSWORD"}
              type={"password"}
              placeholder={"Enter a Password"}
              handleChange={handleChange}
              passwordMessage={passwordMessage}
            />
            <FormInput
              ref={confirmPassword}
              id={"confirmPassword"}
              labelText={"CONFIRM PASSWORD"}
              placeholder={"Reenter Password"}
              type={"password"}
              handleChange={handleChange}
              passwordMessage={passwordMessage}
            />
          </div>

          <div className="form__createAccountContainer">
            <button
              onClick={() => console.log(email.current)}
              className="form__createAccountBtn"
            >
              Create Account
            </button>
            <div className="form__haveAnAccount">
              Already have an account? <a href="#">Log in</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
