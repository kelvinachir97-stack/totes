import womanOne from '../assets/images.jpeg';
import womanTwo from '../assets/woman.png';

export default function Hero() {
  return (
    <section className="w-full bg-[#f4fbfa] font-sans text-slate-900 px-4 sm:px-8 lg:px-16 py-8 lg:py-12">
      <div className="w-full">
        <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold">
          Shop your favourite totebag.
        </h2>
        <p className="text-xs md:text-sm lg:text-base text-slate-500 mt-1">
          Select the totebag that matches your fashion.
        </p>

        <div className="relative mt-5 h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] w-full rounded-2xl border border-slate-300 bg-white overflow-hidden">
          <div className="absolute top-4 left-4 lg:top-7 lg:left-7 flex items-center gap-1.5 z-10">
            <span className="h-2 lg:h-2.5 w-3 lg:w-3.5 rounded-full bg-slate-900" />
            <span className="h-2 lg:h-2.5 w-8 lg:w-10 rounded-full bg-slate-300" />
            <span className="h-2 lg:h-2.5 w-3 lg:w-3.5 rounded-full bg-slate-900" />
            <span className="h-2 lg:h-2.5 w-3 lg:w-3.5 rounded-full bg-slate-900" />
          </div>

          <div className="absolute left-5 sm:left-10 lg:left-16 top-1/2 -translate-y-1/2 w-[60%] sm:w-[45%] lg:w-[36%] z-10 mt-23">
  <p className="text-[10px] lg:text-xs tracking-[0.15em] uppercase text-slate-500">
    Trending Totebags
  </p>
  <h3 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl leading-tight font-medium mt-1">
    Leather Totebags
  </h3>
  <p className="text-[11px] sm:text-xs lg:text-sm text-slate-900 mt-2 lg:mt-3 leading-snug">
    Totebag's made with leather fabric. This fabric is usually stronger than the others.
  </p>
</div>

<img
  src={womanOne}
  alt="Woman carrying a leather totebag"
  className="absolute top-[-20%] sm:top-[-30%] lg:top-[-36%] right-[4%] sm:right-[10%] lg:right-[178px] h-[100%] sm:h-[120%] lg:h-[135%] w-auto object-contain object-top"
/>

<img
  src={womanTwo}
  alt=""
  aria-hidden="true"
  className="hidden sm:block absolute bottom-0 left-[70%] lg:left-[74%] h-[45%] sm:h-[60%] lg:h-[70%] w-auto object-contain object-bottom"
/>
</div>
</div>
    </section>
  );
}