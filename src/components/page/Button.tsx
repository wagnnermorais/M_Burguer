import { ButtonProps } from "@/types/ButtonProps";

export default function Button({
  text,
  width,
  color,
  background,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`py-2 px-8 w-${[
        width,
      ]} border ease-in-out duration-300 text-${color} bg-${background}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
