import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  value: string | number;
  onChange?: (value: any) => void;
}