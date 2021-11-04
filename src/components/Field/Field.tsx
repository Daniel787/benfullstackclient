import * as React from "react";
import Label from "./Label";
import { FC, InputProps, TextAreaProps } from "../../types/index";
import { Textarea } from "@chakra-ui/textarea";
import { Input } from "@chakra-ui/input";

/*
  Field elements for a form that are conditionally rendered by a fieldType
  of "input" or "textarea".

  @param {Object} props - properties for an input or textarea
  @returns {JSX.Element | null} 
*/
const Field: FC<InputProps | TextAreaProps> = (props) => {
  switch (props.fieldType) {
    case "input":
      return (
        <>
          <Label name={props.name} label={props.label} />
          <Input
            ref={props.innerRef}
            name={props.name}
            className={props.className}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
          />
        </>
      );
    case "textarea":
      return (
        <>
          <Label name={props.name} label={props.label} />
          <Textarea
            ref={props.innerRef}
            name={props.name}
            className={props.className}
            placeholder={props.placeholder}
            rows={props.rows}
            cols={props.cols}
            value={props.value}
            onChange={props.onChange}
          />
        </>
      );
    default:
      return null;
  }
};

export default Field;
