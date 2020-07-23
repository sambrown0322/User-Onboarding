import React from "react";

export default function Form(props) {
  const {
    values,
    inputChange,
    checkboxChange,
    submit,
    disabled,
    errors,
  } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkboxChange(name, checked);
  };
  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>Create an account</h2>
      <label>
        Name:
        <input
          id="name"
          value={values.name}
          onChange={onInputChange}
          name="name"
          type="text"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          id="email"
          value={values.email}
          onChange={onInputChange}
          name="email"
          type="email"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          id="password"
          value={values.password}
          onChange={onInputChange}
          name="password"
          type="password"
        />
      </label>
      <br />
      <label>
        I agree to the Terms and Conditions
        <input
          checked={values.termsOfService === true}
          onChange={onCheckboxChange}
          name="termsOfService"
          type="checkbox"
        />
      </label>
      <br />
      <button disabled={disabled}>Submit</button>
      <div className="errors">
        <div id="errName">{errors.name}</div>
        <div id="errEmail">{errors.email}</div>
        <div id="errPassword">{errors.password}</div>
      </div>
    </form>
  );
}
