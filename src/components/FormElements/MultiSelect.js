import React from "react";
import index from "../../containers/EventDetails/index";

const MultiSelect = props => {
  const rendeFirstOptions = (key, index) => {
    return (
      <option key={`${index}-${key}`} value={key}>
        {props.options1[key]}
      </option>
    );
  };

  const renderSecondOptions = (key, index) => {
    return (
      <option key={`${index}-${key}`} value={key}>
        {props.options2[key]}
      </option>
    );
  };

  if (props && props.options1 && props.options2) {
    return (
      <div
        className={`form-group ${
          props.meta.touched && props.meta.error ? "has-error" : ""
        } ${props.className}`}
      >
        {props.label && <label htmlFor={props.input.name}>{props.label}</label>}

        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <select {...props.input} className="form-control">
            {Object.keys(props.options1).map(rendeFirstOptions)}
          </select>
          <select {...props.input} className="form-control">
            {Object.keys(props.options2).map(renderSecondOptions)}
          </select>
        </div>
        {props.meta.touched &&
          props.meta.error && (
            <span className="text-danger">{props.meta.error}</span>
          )}
      </div>
    );
  }
  return <div />;
};

export default MultiSelect;
