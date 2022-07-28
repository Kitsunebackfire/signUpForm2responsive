import React from "react";
import "./styling/FormInput.css";

const FormInput = React.forwardRef((props, ref) => {
  return (
    <div className="formInput__container">
      <label className="formInput__label" htmlFor={props.id}>
        {props.labelText}
      </label>
      {props.handleChange ? (
        // passwords
        <>
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
                //console.log(e.target.type);
                props.handleChange(e);
              }}
            />
          </div>

          <div
            className="formInput__passwordMessage"
            style={
              props.message.length > 15 ? { color: "red" } : { color: "green" }
            }
          >
            {props.message}
          </div>
        </>
      ) : (
        <>
          <input
            ref={ref}
            placeholder={props.placeholder ? props.placeholder : null}
            required
            className="formInput__input"
            id={props.id}
            name={props.id}
            type={props.type}
            maxLength={props.type === "tel" ? 10 : null}
          />
          <div
            className="formInput__passwordMessage"
            style={props.message.length > 2 ? { color: "red" } : null}
          >
            {props.message}
          </div>
        </>
      )}
    </div>
  );
});

export default FormInput;
