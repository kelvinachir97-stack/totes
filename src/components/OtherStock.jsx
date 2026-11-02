import Card from './Card';
import tote1 from '../assets/happybag.jpg';
import tote2 from '../assets/monoclebag.jpg';
import tote3 from '../assets/monoclebag.jpg';
import tote5 from '../assets/monoclebag.jpg';
import tote4 from '../assets/happybag.jpg';
import tote6 from '../assets/happybag.jpg';
import tote7 from '../assets/monoclebag.jpg';
import tote8 from '../assets/happybag.jpg';
import tote9 from '../assets/monoclebag.jpg';
import tote10 from '../assets/happybag.jpg';
import tote11 from '../assets/monoclebag.jpg';
import tote12 from '../assets/happybag.jpg';

const products = [
  { image: tote1, name: 'Chinos', price: 'N5,000' },
  { image: tote2, name: 'Chinos', price: 'N5,000' },
  { image: tote3, name: 'Chinos', price: 'N5,000' },
  { image: tote4, name: 'Chinos', price: 'N5,000' },
  { image: tote5, name: 'Chinos', price: 'N5,000' },
  { image: tote6, name: 'Chinos', price: 'N5,000' },
  { image: tote7, name: 'Chinos', price: 'N5,000' },
  { image: tote8, name: 'Chinos', price: 'N5,000' },
  { image: tote9, name: 'Chinos', price: 'N5,000' },
  { image: tote10, name: 'Chinos', price: 'N5,000' },
  { image: tote11, name: 'Chinos', price: 'N5,000' },
  { image: tote12, name: 'Chinos', price: 'N5,000' },
];

export default function OtherStock() {
  return (
    <section className="w-full bg-white font-sans text-slate-900 px-4 sm:px-8 lg:px-16 py-8">
      <h2 className="text-xl md:text-2xl font-semibold">Available Stock</h2>
      <p className="text-xs md:text-sm text-slate-900 mt-1">
        These totebags are currently available for sale.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 mt-6">
        {products.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}