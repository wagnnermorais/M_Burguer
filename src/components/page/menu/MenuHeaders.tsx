import MenuHeadersProps from "@/types/MenuHeaders";

export default function MenuHeaders({
  text,
  onClick,
  isActive,
}: MenuHeadersProps) {
  return (
    <div className="relative" onClick={onClick}>
      <h3
        className={`font-medium uppercase tracking-tighter ease duration-300 cursor-pointer ${
          isActive ? "text-slate-500" : "text-white"
        } hover:text-slate-500`}
      >
        {text}
      </h3>
      <div
        className={`absolute -bottom-1 left-0 h-1 w-full bg-white transition-transform duration-300 ease-in-out ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
}
