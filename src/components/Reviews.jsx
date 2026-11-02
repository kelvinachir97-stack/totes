import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import avatar from "../assets/yusuf.jpg";
import toteImage from "../assets/white-bag.jpeg";

const reviewText =
  "My tote bag exceeded my expectations in every way. The design matched my description perfectly, showcasing outstanding quality and craftsmanship. The exceptional service ensured that I received exactly what I envisioned. I am thoroughly satisfied with the stylish and durable tote bag, which has quickly become my go-to accessory for both everyday use and special occasions.";

const reviews = [
  { id: 1, name: "Yusuf", date: "May 15, 2024", rating: 3.5, size: "16:9", color: "Cream", design: "Cream" },
  { id: 2, name: "Yusuf", date: "May 15, 2024", rating: 3.5, size: "16:9", color: "Cream", design: "Cream" },
  { id: 3, name: "Yusuf", date: "May 15, 2024", rating: 3.5, size: "16:9", color: "Cream", design: "Cream" },
  { id: 4, name: "Yusuf", date: "May 15, 2024", rating: 3.5, size: "16:9", color: "Cream", design: "Cream" },
];

function Stars({ rating }) {
  return (
    <div className="flex gap-1">
      {[ 1, 2, 3, 4, 5 ].map((n) => {
        let Icon = FaRegStar;
        if (rating >= n) Icon = FaStar;
        else if (rating >= n - 0.5) Icon = FaStarHalfAlt;

        return (
          <span
            key={n}
            className="flex items-center justify-center w-7 h-7 bg-black rounded text-yellow-400 text-sm"
          >
            <Icon />
          </span>
        );
      })}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="mt-16 min-w-0">
      <h2 className="text-xl md:text-2xl font-semibold">Customers Reviews</h2>
      <p className="text-xs md:text-sm text-slate-500 mt-1">Testimonies from customers.</p>

      <div className="space-y-10 mt-8">
        {reviews.map((review) => (
          <div key={review.id} className="flex gap-4 pb-10 border-b border-slate-200 min-w-0">
            <img
              src={avatar}
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover shrink-0"
            />

            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-medium">{review.name}</h3>
              <p className="text-xs text-slate-500">{review.date}</p>

              <div className="flex items-center gap-2 mt-3">
                <span className="text-sm font-medium">Rating:</span>
                <Stars rating={review.rating} />
              </div>

              <p className="text-sm mt-3">
                <span className="font-medium">Size:</span> {review.size}
                <span className="mx-2 text-slate-400">|</span>
                <span className="font-medium">Color:</span> {review.color}
                <span className="mx-2 text-slate-400">|</span>
                <span className="font-medium">Design element:</span> {review.design}
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="w-40 h-40 sm:w-44 sm:h-44 border border-slate-200 bg-white flex items-center justify-center overflow-hidden">
                  <img src={toteImage} alt="Review product" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-40 h-40 sm:w-44 sm:h-44 border border-slate-200 bg-white flex items-center justify-center text-slate-300">
                  <FiPlus size={28} />
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-700 mt-4">{reviewText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}