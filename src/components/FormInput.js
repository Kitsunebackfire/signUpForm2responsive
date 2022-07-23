import React from "react";
import "./styling/FormInput.css";

const FormInput = React.forwardRef((props, ref) => {
  return (
    <div className="formInput__container">
      <label className="formInput__label" htmlFor={props.id}>
        {props.labelText}
      </label>
      <input
        ref={ref}
        placeholder={props.placeholder ? props.placeholder : null}
        required
        className="formInput__input"
        id={props.id}
        name={props.id}
        type={props.type}
      ></input>
      {props.passwordMessagePresent ? <div className=""></div> : null}
    </div>
  );
});

export default FormInput;
