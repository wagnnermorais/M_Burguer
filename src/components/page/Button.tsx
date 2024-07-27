import { ButtonProps } from "@/types/ButtonProps";

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className={`py-2 px-8 border ease-in-out duration-300 hover:bg-slate-600`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
