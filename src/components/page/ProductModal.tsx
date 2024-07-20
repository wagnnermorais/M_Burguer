import { ProductModalProps } from "@/types/ProductModal";

export default function ProductModal({
  background,
  title,
  onClick,
}: ProductModalProps) {
  return (
    <div
      className="flex items-center justify-center min-h-[35vh] relative cursor-pointer "
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center rounded-md opacity-50 ease duration-500 hover:opacity-70"
        style={{
          backgroundImage: `url('${background}')`,
        }}
      />
      <h2 className="text-4xl font-bold z-10 relative pointer-events-none text-white">
        {title}
      </h2>
    </div>
  );
}
