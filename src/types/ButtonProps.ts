import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  width?: string;
  color?: string;
  background?: string;
  hover?: string;
  onClick: () => void;
}