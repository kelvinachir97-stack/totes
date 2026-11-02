import Card from './Card';
import tote1 from '../assets/happybag.jpg';
import tote2 from '../assets/monoclebag.jpg';
import tote3 from '../assets/monoclebag.jpg';
import tote4 from '../assets/happybag.jpg';
import tote5 from '../assets/monoclebag.jpg';
import tote6 from '../assets/happybag.jpg';
import tote7 from '../assets/monoclebag.jpg';
import tote8 from '../assets/happybag.jpg';
import explore1 from '../assets/explore.jpg';
import branded from '../assets/branded.jpg';
import office from '../assets/office-totes.png';

export default function ExploreSection() {
  return (
   <section className="w-full bg-[#f4fbfa] font-sans text-slate-900 px-4 sm:px-8 lg:px-16 py-8">
  <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-3">
  <div className="relative overflow-hidden rounded-xl h-[200px] sm:h-[300px] lg:h-[450px]">
    <img src={explore1} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    <div className="absolute left-5 bottom-5 right-5 text-white">
      <h2 className="text-xl md:text-2xl font-semibold">Explore the totebag fashion</h2>
      <p className="text-[10px] md:text-xs mt-1 max-w-sm leading-snug">
        Totes are reliable carriage that adds to the details of your dress fashion with contrasting your sense.
      </p>
      <button
        type="button"
        className="mt-3 rounded-full bg-white text-slate-900 px-5 py-2 text-xs font-medium cursor-pointer"
      >
        Shop now
      </button>
    </div>
  </div>

  <div className="relative overflow-hidden rounded-xl h-[200px] sm:h-[300px] lg:h-[450px]">
    <img src={branded} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    <div className="absolute left-4 bottom-4 right-4 text-white">
      <h3 className="text-base md:text-lg font-semibold leading-tight">Branded Collections</h3>
      <p className="text-[10px] mt-1 leading-snug">
        Customize your style and express who you are through our branded totes.
      </p>
    </div>
  </div>

  <div className="relative overflow-hidden rounded-xl h-[200px] sm:h-[300px] lg:h-[450px]">
    <img src={office} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    <div className="absolute left-4 bottom-4 right-4 text-white">
      <h3 className="text-base md:text-lg font-semibold leading-tight">Totes as Office wears</h3>
      <p className="text-[10px] mt-1 leading-snug">
        Totes provide room to carry essentials and look sharp in the office environment.
      </p>
    </div>
  </div>
</div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 mt-8">
        <Card image={tote1} name="Chinos" price="N5,000" />
        <Card image={tote2} name="Chinos" price="N5,000" />
        <Card image={tote3} name="Chinos" price="N5,000" />
        <Card image={tote4} name="Chinos" price="N5,000" />
        <Card image={tote5} name="Chinos" price="N5,000" />
        <Card image={tote6} name="Chinos" price="N5,000" />
        <Card image={tote7} name="Chinos" price="N5,000" />
        <Card image={tote8} name="Chinos" price="N5,000" />
      </div>
    </section>
  );
}