import { Control, FieldError, UseFormRegister } from "react-hook-form";

export interface FormValues {
  fullName: string;
  birthDate: Date | null;
  gender: "male" | "female";
}

export interface TextInputProps {
  label: string;
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
  error?: string;
  placeholder: string;
}

export interface DateInputProps {
  name: keyof FormValues;
  control: Control<FormValues>;
  error?: string;
}

export interface GenderSelectProps {
  register: UseFormRegister<FormValues>;
  error?: string;
}
