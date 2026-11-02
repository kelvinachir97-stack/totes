// import React from 'react';
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import minimalist from "../assets/minimalist.jpeg";

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Plane totebag",
      sku: "thetotebag1500",
      color: "Cream",
      price: "₦ 4,000",
      quantity: 1,
      image: minimalist,
    },
    {
      id: 2,
      name: "Plane totebag",
      sku: "thetotebag1500",
      color: "Cream",
      price: "₦ 4,000",
      quantity: 1,
      image: minimalist,
    },
    {
      id: 3,
      name: "Plane totebag",
      sku: "thetotebag1500",
      color: "Cream",
      price: "₦ 4,000",
      quantity: 1,
      image: minimalist,
    },
    {
      id: 4,
      name: "Plane totebag",
      sku: "thetotebag1500",
      color: "Cream",
      price: "₦ 4,000",
      quantity: 1,
      image: minimalist,
    },
  ];
  const [showCheckout, setShowCheckout] = useState(false);
  return (
    <>
      <section className="w-full bg-[] min-h-screen mt-20 py-20 px-6 sm:px-12 md:px-16 lg:px-20 font-sans text-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-semibold font-raleway text-[#001616] mb-2">
              Shopping Cart.
            </h1>
            <p className="text-[#2F3131] font-raleway text-sm sm:text-base font-normal">
              Effortlessly manage your purchases and checkout with ease.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-gray-200 gap-4"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-5">
                    <div className="w-24 h-24 sm:w-32 sm:h-35  rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-[26px] font-raleway font-medium text-[#001616]">
                        {item.name}
                      </h3>
                      <p className="text-[17px] font-raleway font-normal text-[#4E5050]">
                        {item.sku}
                      </p>

                      {/* Star Rating */}
                      <div className="flex items-center gap-1 pt-1">
                        {[1, 2, 3, 4].map((star) => (
                          <div
                            key={star}
                            className="w-6 h-6 bg-[#052e2b] rounded flex items-center justify-center text-amber-400 text-xl"
                          >
                            ★
                          </div>
                        ))}
                        <div className="w-6 h-6 bg-[#052e2b] rounded flex items-center justify-center text-amber-400 text-xl">
                          ☆
                        </div>
                      </div>

                      <p className="text-[16px] font-montserrat font-medium text-gray-200 pt-2">
                        Color:{" "}
                        <span className="text-[#001515] font-montserrat font-normal">
                          {item.color}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Quantity Controls, Price, & Delete */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0">
                    {/* Quantity Selector Box */}
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1.5 gap-3 bg-white">
                      <button
                        type="button"
                        className="text-gray-500 hover:text-black font-bold text-sm"
                      >
                        +
                      </button>
                      <span className="font-semibold text-black text-sm w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="text-gray-500 hover:text-black font-bold text-sm"
                      >
                        −
                      </button>
                    </div>

                    {/* Item Price */}
                    <span className="text-base sm:text-lg font-bold font-montserrat text-[#111111] min-w-[80px] text-right">
                      {item.price}
                    </span>

                    {/* Delete Button */}
                    <button
                      type="button"
                      aria-label="Remove item"
                      className="w-9 h-9 bg-[#052e2b] hover:bg-[#021816] text-white rounded flex items-center justify-center transition-colors shrink-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trash preview-icon"
                      >
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M3 6h18" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-[#E0E7E71A] rounded-[8px] p-6 space-y-4  h-[450px] border border-gray-100">
                <h2 className="text-xl font-raleway font-bold text-[#4E5050] mt-2">
                  Order Summary
                </h2>

                <div className="space-y-3 text-[16px] text-gray-500 font-montserrat pt-2 leading-8">
                  <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span className="font-bold text-[#001616] font-montserrat">
                      ₦ 4,000.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Delivery</span>
                    <span className="font-bold text-[#001616] font-montserrat">
                      ₦ 1,500.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Zip</span>
                    <span className="font-bold text-[#001616] font-montserrat">
                      ₦ 1,000.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Front & Back Designs</span>
                    <span className="font-bold text-[#001616] font-montserrat">
                      ₦ 1,000.00
                    </span>
                  </div>
                </div>

                <hr className="border-gray-200 my-2" />

                <div className="flex justify-between items-center text-base sm:text-lg font-bold text-[#111111] pt-3">
                  <span className="text-[19px] font-raleway">Total</span>
                  <span>₦ 7,500.00</span>
                </div>

                {/* Delivery Warning Box */}
                <div className="mt-4 bg-white border border-gray-200 rounded-lg p-3 flex items-start gap-2.5 text-[14px] text-gray-600 leading-relaxed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-octagon-alert preview-icon"
                  >
                    <path d="M12 16h.01" />
                    <path d="M12 8v4" />
                    <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
                  </svg>

                  <span>
                    Please your totebag will be delivered in three to five working days.
                  </span>
                </div>
              </div>

              {/* Payment Options Button */}
              <button
                type="button"
                onClick={() => setShowCheckout(true)}
                className="w-full bg-[#031d1b] hover:bg-[#021413] text-white py-3.5 px-6 rounded-lg font-medium text-sm flex gap-3 items-center transition-colors shadow-sm"
              >
                <span>Payment options</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21}
                  height={21}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-credit-card preview-icon"
                >
                  <rect width={20} height={14} x={2} y={5} rx={2} />
                  <line x1={2} x2={22} y1={10} y2={10} />
                  <path d="M6 14h2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {showCheckout && (
  <CheckoutModal
    onClose={() => setShowCheckout(false)}
  />
)}
    </>
  );
};

export default ShoppingCart;