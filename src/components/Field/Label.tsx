import * as React from "react";
import { FC, LabelProps } from "../../types/index";

/*
  Field label for form elements

  @param {string} name - form field name
  @param {string} label - form field label 
  @returns {JSX.Element}
*/
const Label: FC<LabelProps> = ({ name, label }) => (
  <label className="label" htmlFor={name}>
    {label}&#58;
  </label>
);

export default Label;
