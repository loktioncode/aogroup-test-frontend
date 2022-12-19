import React from "react";
import { Field } from "formik";

function InputFieldProps({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

export default InputFieldProps;