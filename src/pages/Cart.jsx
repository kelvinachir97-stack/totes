import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar, FaTruck } from "react-icons/fa";
import { FiChevronDown, FiMinus, FiPlus, FiCircle, FiCheckCircle } from "react-icons/fi";
import Card from "../components/Card";
import Reviews from "../components/Reviews";
import mainImage from "../assets/white-bag.jpeg";
import whiteImage from "../assets/white-bag.jpeg";
import blackImage from "../assets/monoclebag.jpg";
import greyImage from "../assets/happybag.jpg";
import minimalistImage from "../assets/minimalist.jpeg";

const swatches = [
  { name: "WHITE", image: whiteImage },
  { name: "BLACK", image: blackImage },
  { name: "GREY", image: greyImage },
];

const shippingOptions = [ "Zip", "Button", "Zip or Button", "None" ];

const locations = [ "Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan" ];

const similarBags = [
  { image: whiteImage, name: "Chinos", price: "N5,000" },
  { image: blackImage, name: "Chinos", price: "N5,000" },
  { image: whiteImage, name: "Chinos", price: "N5,000" },
  { image: greyImage, name: "Chinos", price: "N5,000" },
  { image: minimalistImage, name: "Chinos", price: "N5,000" },
  { image: blackImage, name: "Chinos", price: "N5,000" },
  { image: greyImage, name: "Chinos", price: "N5,000" },
  { image: whiteImage, name: "Chinos", price: "N5,000" },
];

const description =
  "The Cream-Colored Totebag is a blend of elegance and functionality. Crafted from luxurious fabric, its spacious interior accommodates daily essentials. Lightweight and stylish, it's perfect for any occasion, offering comfort and sophistication. The tote features sturdy, reinforced handles for added durability, ensuring it can carry heavy items without compromising on style.";

export default function Cart() {
  const navigate = useNavigate();
  const [ activeSwatch, setActiveSwatch ] = useState("WHITE");
  const [ shipping, setShipping ] = useState("Zip");
  const [ quantity, setQuantity ] = useState(1);
  const [ location, setLocation ] = useState("");

  const activeImage = swatches.find((s) => s.name === activeSwatch).image;

  return (
    <section className="bg-white font-sans text-slate-900 px-4 sm:px-8 lg:px-16 py-10 overflow-x-hidden">
      <h1 className="text-3xl font-semibold">Your Cart.</h1>
      <p className="text-sm text-slate-500 mt-1">
        Review and manage the items in your shopping cart.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        <div className="min-w-0">
          <div className="w-full aspect-square border border-slate-200 bg-white flex items-center justify-center overflow-hidden">
            <img src={mainImage} alt="Cream colored totebag" className="w-full h-full object-contain" />
          </div>

          <div className="flex justify-center gap-4 mt-4">
            {swatches.map((s) => (
              <button
                key={s.name}
                type="button"
                onClick={() => setActiveSwatch(s.name)}
                className="flex flex-col items-center gap-2 text-[11px] tracking-wide"
              >
                <div
                  className={`w-24 h-28 sm:w-28 sm:h-32 border bg-white overflow-hidden ${activeSwatch === s.name ? "border-slate-900" : "border-slate-200"
                    }`}
                >
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                </div>
                {s.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6 text-xs">
            {shippingOptions.map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => setShipping(o)}
                className="flex items-center gap-1.5"
              >
                {shipping === o ? <FiCheckCircle /> : <FiCircle />}
                {o}
              </button>
            ))}
          </div>

          <p className="text-center text-[11px] text-slate-500 mt-3">
            Zip cost ₦0.00 extra while button cost ₦500.00 extra
          </p>
        </div>

        <div className="min-w-0">
          <p className="text-xs text-slate-500">Product</p>

          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 border border-slate-200 rounded-md text-xs">
            <FaTruck />
            Delivery fee
            <span className="bg-slate-900 text-white px-2 py-0.5 rounded text-[10px]">₦500</span>
          </div>

          <h2 className="text-2xl font-medium mt-4">Cream colored totebag</h2>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex gap-1 bg-black px-2 py-1 rounded text-yellow-400 text-sm">
              {[ ...Array(5) ].map((_, i) => (i < 4 ? <FaStar key={i} /> : <FaRegStar key={i} />))}
            </div>
            <span className="border border-slate-200 px-2 py-0.5 rounded text-xs">2.4</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm">
            <p>
              <span className="font-medium">Price:</span>{" "}
              <span className="font-semibold">₦ 4,000</span>
            </p>
            <span className="w-px h-6 bg-slate-300" />
            <div className="flex items-center gap-2">
              <span className="font-medium">Quantity:</span>
              <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                <FiMinus />
              </button>
              <span className="border border-slate-200 px-2 text-xs">{quantity}</span>
              <button type="button" onClick={() => setQuantity((q) => q + 1)}>
                <FiPlus />
              </button>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-slate-600 mt-4 line-clamp-2">{description}</p>

          <button
            type="button"
            onClick={() => navigate("/checkout")}
            className="w-full mt-6 py-3 border border-slate-400 rounded-md text-sm font-medium hover:bg-slate-50"
          >
            Buy Now
          </button>
          <button
            type="button"
            className="w-full mt-3 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-slate-800"
          >
            Add to chart
          </button>

          <div className="relative mt-4">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full appearance-none px-4 py-3 bg-[#eaf6f4] border border-[#9fd3c7] rounded-md text-sm text-[#0f5f55] outline-none"
            >
              <option value="">Select your location</option>
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0f5f55]" />
          </div>
        </div>
      </div>

      <div className="mt-12 min-w-0">
        <h2 className="text-sm font-semibold">Description</h2>
        <p className="text-sm leading-relaxed text-slate-700 mt-2">{description}</p>
      </div>

      <div className="mt-16 min-w-0">
        <h2 className="text-lg md:text-2xl font-semibold">Totebags you may like</h2>
        <p className="text-xs md:text-sm text-slate-500 mt-1">
          Similar totebags like the one selected.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 mt-6">
          {similarBags.map((bag, index) => (
            <div key={index} className="min-w-0">
              <Card image={bag.image} name={bag.name} price={bag.price} />
            </div>
          ))}
        </div>
      </div>

      <Reviews />
    </section>
  );
}