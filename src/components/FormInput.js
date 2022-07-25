import React from "react";
import "./styling/FormInput.css";

const FormInput = React.forwardRef((props, ref) => {
  return (
    <div className="formInput__container">
      <label className="formInput__label" htmlFor={props.id}>
        {props.labelText}
      </label>
      {props.handleChange ? (
        <div>
          <input
            ref={ref}
            placeholder={props.placeholder ? props.placeholder : null}
            required
            className="formInput__input"
            id={props.id}
            name={props.id}
            type={props.type}
            onChange={(e) => {
              console.log(e.target.type);
              props.handleChange(e);
            }}
            style={
              props.passwordMessage !== ""
                ? props.passwordMessage === "Passwords Match"
                  ? { border: "1px solid green" }
                  : { border: "1px solid red" }
                : console.log(`${props.id} field is empty`)
            }
          />
        </div>
      ) : (
        <input
          ref={ref}
          placeholder={props.placeholder ? props.placeholder : null}
          required
          className="formInput__input"
          id={props.id}
          name={props.id}
          type={props.type}
        />
      )}

      <div
        className="formInput__passwordMessage"
        style={
          props.passwordMessage === "** Passwords Do Not Match"
            ? { color: "red" }
            : { color: "green" }
        }
      >
        {props.passwordMessage}
      </div>
    </div>
  );
});

export default FormInput;
