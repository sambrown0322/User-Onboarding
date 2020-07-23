import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Form from "./form";
import formSchema from "../validation/formSchema";
import Member from "./Member";
import * as yup from "yup";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  termsOfService: false,
};
const initialUsers = [];

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
};
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const getUsers = () => {
  //   axios
  //     .get("https://reqres.in/api/users")
  //     .then((res) => {
  //       setUsers(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    // Form validation here
    setFormValues({ ...formValues, [name]: value });
  };

  const checkboxChange = (name, isChecked) => {
    setFormValues({ ...formValues, [name]: isChecked });
  };
  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      termsOfService: formValues.termsOfService,
    };
    postNewUser(newUser);
  };
  // useEffect(() => {
  //   getUsers();
  // }, []);
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  console.log(users);
  // debugger;

  return (
    <div className="App">
      <Form
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />
      {/* <Member details={formValues} /> */}
      {users.map((member) => {
        return <Member key={member.id} details={member} />;
      })}
    </div>
  );
}

export default App;
