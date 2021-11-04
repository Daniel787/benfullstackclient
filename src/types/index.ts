import type {
  FC,
  ChangeEvent,
  RefObject as Ref,
  FormEvent,
  ReactText,
} from "react";

// custom utility types that can be reused
type ClassName = { className?: string };
type InnerRef<T> = { innerRef?: Ref<T> };
type OnChange<T> = { onChange: (event: ChangeEvent<T>) => void };
type Placeholder = { placeholder?: string };
type Value<T> = { value: T };

// defines a destructured event in a callback
export type EventTargetNameValue = {
  target: {
    name: string;
    value: string;
  };
};

/*
    Utility interface that constructs typings based upon passed in arguments
  
    @param {HTMLElement} E - type of HTML Element that is being rendered
    @param {string} F - the fieldType to be rendered ("input" or "textarea")
    @param {string} V - the type of value the field expects to be (string, number, etc)
  */
interface FieldProps<E, F, V>
  extends LabelProps,
    ClassName,
    Placeholder,
    OnChange<E>,
    InnerRef<E>,
    Value<V> {
  fieldType: F;
}

// defines props for a "Label" component
export interface LabelProps {
  name: string;
  label: string;
}

// defines props for an "input" element by extending the FieldProps interface
export interface InputProps
  extends FieldProps<HTMLInputElement, "input", ReactText> {
  type: "text" | "number" | "email" | "phone";
}

// defines props for an "textarea" element by extending the FieldProps interface
export interface TextAreaProps
  extends FieldProps<HTMLTextAreaElement, "textarea", string> {
  cols?: number;
  rows?: number;
}

// exporting React types for reusability
export type { ChangeEvent, FC, FormEvent };
