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

  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [firstNameMessage, setFirstNameMessage] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setconfirmPasswordMessage] = useState("");
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleEmail = (email) => {
    // validates email via regex to catch incomplete emails and mark input field as invalid via classchange
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const handleSubmit = () => {
    // must set to true to circumvent issue of handlesubmit previously not being able to validate password and confirm password
    setHasBeenSubmitted(true);
    //first name
    if (firstName.current.value === "") {
      firstName.current.classList = "formInput__input formInput__inputInvalid";
      setFirstNameMessage("First Name field cannot be blank");
    } else {
      firstName.current.classList = "formInput__input formInput__inputSuccess";
      setFirstNameMessage("");
    }
    // last name
    if (lastName.current.value === "") {
      lastName.current.classList = "formInput__input formInput__inputInvalid";
      setLastNameMessage("Last Name field cannot be blank");
    } else {
      lastName.current.classList = "formInput__input formInput__inputSuccess";
      setLastNameMessage("");
    }
    // email
    if (email.current.value === "") {
      email.current.classList = "formInput__input formInput__inputInvalid";
      setEmailMessage("Email field cannot be blank");
    } else if (!handleEmail(email.current.value)) {
      email.current.classList = "formInput__input formInput__inputInvalid";
      setEmailMessage("Please enter a valid email such as 'email@email.com'");
    } else {
      email.current.classList = "formInput__input formInput__inputSuccess";
      email.current.classList = "formInput__input formInput__inputInvalid";
      setEmailMessage("");
    }
    // phone
    if (phoneNumber.current.value === "") {
      phoneNumber.current.classList =
        "formInput__input formInput__inputInvalid";
      setPhoneMessage("Phone Number field cannot be blank");
    } else {
      phoneNumber.current.classList =
        "formInput__input formInput__inputSuccess";
      setPhoneMessage("");
    }
  };

  const handleChange = (e) => {
    setPasswords((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    if (hasBeenSubmitted === true && passwords.password === "") {
      password.current.classList = "formInput__input formInput__inputInvalid";
      setPasswordMessage("Password field cannot be blank");
    }
    if (hasBeenSubmitted === true && passwords.confirmPassword === "") {
      confirmPassword.current.classList =
        "formInput__input formInput__inputInvalid";
      setconfirmPasswordMessage("Confirm Password field cannot be blank");
    }
  }, [hasBeenSubmitted, passwords]);

  useEffect(() => {
    const handlePasswordMatching = () => {
      if (passwords.password === "" && passwords.confirmPassword === "") {
        setPasswordMessage("");
      } else if (passwords.password !== passwords.confirmPassword) {
        password.current.classList = "formInput__input formInput__inputInvalid";
        confirmPassword.current.classList =
          "formInput__input formInput__inputInvalid";
        setPasswordMessage("Passwords Do Not Match");
        setconfirmPasswordMessage("Passwords Do not Match");
      } else if (passwords.password === passwords.confirmPassword) {
        password.current.classList = "formInput__input formInput__inputSuccess";
        confirmPassword.current.classList =
          "formInput__input formInput__inputSuccess";
        setPasswordMessage("Passwords Match");
        setconfirmPasswordMessage("Passwords Match");
      }
    };
    handlePasswordMatching();
  }, [passwords]);

  return (
    <div className="form">
      <a data-testid="linkTreeLink" href="https://linktr.ee/kurtisiveycodes">
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

      <a
        data-testid="githubLink"
        href="https://github.com/Kitsunebackfire/signUpForm2responsive"
      >
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
              message={firstNameMessage}
            />
            <FormInput
              ref={lastName}
              id={"lastName"}
              labelText={"LAST NAME"}
              placeholder={"DOE"}
              type={"text"}
              message={lastNameMessage}
            />
            <FormInput
              ref={email}
              id={"email"}
              labelText={"EMAIL"}
              placeholder={"email@gmail.com"}
              type={"email"}
              message={emailMessage}
            />
            <FormInput
              ref={phoneNumber}
              id={"phoneNumber"}
              labelText={"PHONE NUMBER"}
              placeholder={"1234567890"}
              type={"tel"}
              message={phoneMessage}
            />
            <FormInput
              ref={password}
              id={"password"}
              labelText={"PASSWORD"}
              type={"password"}
              placeholder={"Enter a Password"}
              handleChange={handleChange}
              message={passwordMessage}
            />
            <FormInput
              ref={confirmPassword}
              id={"confirmPassword"}
              labelText={"CONFIRM PASSWORD"}
              placeholder={"Reenter Password"}
              type={"password"}
              handleChange={handleChange}
              message={confirmPasswordMessage}
            />
          </div>

          <div className="form__createAccountContainer">
            <button
              onClick={() => {
                handleSubmit();
                console.log(firstName.current.classList);
              }}
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
