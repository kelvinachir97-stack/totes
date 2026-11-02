export default function Card({ image, name, price }) {
  return (
    <div className="w-full">
      <img src={image} alt={name} className="w-full aspect-square object-cover" />
      <div className="flex justify-between items-center mt-2 text-xs text-slate-900 font-semibold">
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
}