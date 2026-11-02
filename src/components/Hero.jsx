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

        {/* Dynamic Container Height */}
        <div className="relative mt-5 min-h-[300px] sm:min-h-[360px] md:h-[420px] lg:h-[520px] w-full rounded-2xl border border-slate-300 bg-white overflow-hidden flex flex-col justify-between p-5 sm:p-8 lg:p-0">

          {/* Top Indicators */}
          <div className="lg:absolute lg:top-7 lg:left-7 flex items-center gap-1.5 z-10 mb-4 lg:mb-0">
            <span className="h-2 lg:h-2.5 w-3 lg:w-3.5 rounded-full bg-slate-900" />
            <span className="h-2 lg:h-2.5 w-8 lg:w-10 rounded-full bg-slate-300" />
            <span className="h-2 lg:h-2.5 w-3 lg:w-3.5 rounded-full bg-slate-900" />
            <span className="h-2 lg:h-2.5 w-3 lg:w-3.5 rounded-full bg-slate-900" />
          </div>

          {/* Main Card Content */}
          <div className="w-full h-full lg:relative flex flex-col justify-between lg:block">

            {/* Text Area */}
            <div className="w-full sm:w-[55%] lg:w-[36%] z-10 lg:absolute lg:left-16 lg:top-1/2 lg:-translate-y-1/2 lg:mt-4">
              <p className="text-[10px] lg:text-xs tracking-[0.15em] uppercase text-slate-500">
                Trending Totebags
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl leading-tight font-medium mt-1">
                Leather Totebags
              </h3>
              <p className="text-xs lg:text-sm text-slate-900 mt-2 lg:mt-3 leading-snug">
                Totebag's made with leather fabric. This fabric is usually stronger than the others.
              </p>
            </div>

            {/* Main Image (Woman One) */}
            <img
              src={womanOne}
              alt="Woman carrying a leather totebag"
              className="
            /* Mobile & Tablet Styles: Anchored safely at bottom right without clipping head */
            max-h-[220px] sm:max-h-[280px] w-auto object-contain self-end bottom-60
            
            /* Desktop Styles: Pops out top and aligns to your original offset */
            lg:absolute lg:top-[-36%] lg:right-[178px] lg:max-h-none lg:h-[135%] lg:object-top
          "
            />

            {/* Second Image (Woman Two) */}
            <img
              src={womanTwo}
              alt=""
              aria-hidden="true"
              className="hidden sm:block absolute bottom-0 right-[2%] lg:right-auto lg:left-[74%] h-[50%] sm:h-[55%] lg:h-[70%] w-auto object-contain object-bottom"
            />
          </div>

        </div>
      </div>
    </section>

  );
}