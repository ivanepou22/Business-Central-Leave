import React, { useState } from 'react';
import Joi from 'joi-browser';
import Input from './Input';
import Select from './Select';

const Form = ({ schema, doSubmit }) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  //validate
  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);

    const errors = {};
    if (!error) return null;
    for (let item of error.details)
      errors[item.path[0]] = item.message;
    return errors;
  }

  //validate property
  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, subSchema);
    return error ? error.details[0].message : null;
  }

  //handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;
    doSubmit();
  }

  //handle change
  const handleChange = ({ currentTarget: input }) => { //destructuring e
    const newErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) newErrors[input.name] = errorMessage;
    else delete newErrors[input.name];

    const newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
    setErrors(newErrors);
  }

  //render Button
  const renderButton = label => {
    return <button disabled={validate()} className="btn btn-primary">{label}</button>
  }

  //renderInput
  const renderInput = (name, label, type = 'text') => {
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={handleChange}
        error={errors[name]}
        type={type}
      />
    );
  }

  //renderSelect
  const renderSelect = (name, label, options) => {
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        onChange={handleChange}
        error={errors[name]}
        options={options}
      />
    );
  }

  return {
    data,
    setData,
    errors,
    setErrors,
    handleSubmit,
    handleChange,
    renderButton,
    renderInput,
    renderSelect,
  }
}

export default Form;