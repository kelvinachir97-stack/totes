import { FaTiktok, FaInstagram } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';

const quickLinks = [ 'Terms & Conditions', 'Privacy Policy', 'Contact Us', 'Terms of Service', 'Refund policy' ];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c0c0c] text-white font-sans px-4 sm:px-8 lg:px-16 pt-14 pb-6 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-70">
        <div>
          <p className="text-sm text-slate-300 max-w-xs leading-relaxed">
            We provide comfy tote bags that won't mess up your style and have plenty of space for all your stuff.
          </p>
          <div className="flex items-start gap-1 mt-10">
            <span className="text-4xl lg:text-5xl font-light tracking-tight">thetotebagshop</span>
            <sup className="text-sm mt-1">®</sup>
          </div>
          <div className="flex items-center gap-4 mt-6 text-lg">
            <a href="#" aria-label="TikTok" className="hover:text-slate-400 transition-colors">
              <FaTiktok />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-slate-400 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold md:ml-40">Quick links</h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-slate-300 md:ml-40">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Connect with Us</h3>
          <p className="mt-5 text-sm text-slate-300 leading-relaxed max-w-sm">
            Subscribe to our Newsletter to be the first to be aware of recent production and other production offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex items-center justify-between max-w-sm rounded-md bg-[#1c1c1c] border border-white/10 pl-4 pr-2 py-2"
          >
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 min-w-0 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex items-center justify-center h-8 w-8 rounded-md bg-[#2a2a2a] hover:bg-[#333] transition-colors cursor-pointer"
            >
              <FiArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-14 flex justify-end">
        <p className="text-[10px] text-slate-500">© thetotebagshop 2026.</p>
      </div>
    </footer>
  );
}