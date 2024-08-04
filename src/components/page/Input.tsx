import { InputProps } from "@/types/InputProps";

export default function Input({ title, value, onChange }: InputProps) {
  return (
    <div className="flex flex-col relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="block px-2.5 pb-2.5 pt-4 w-full text-lg appearance-none bg-transparent border rounded-lg peer z-10 focus:outline-none focus:ring-0 text-black border-gray-300 focus:border-purple-500"
        placeholder=" "
      />
      <label
        className={`absolute px-2 text-lg transform -translate-y-4 scale-75 top-0.5 start-1 origin-[0] duration-300 text-gray-500 bg-white
          ${
            value ? "z-20 translate-x-2" : "z-0"
          } peer-focus:z-20 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
          peer-focus:top-0.5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
      >
        {title}
      </label>
    </div>
  );
}
