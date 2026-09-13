import React, { useEffect, useState } from "react";

const DiscountPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) {
    return null;
  }

  return (
    <div className="fixed top-20 right-5 z-50 w-[350px] rounded-2xl bg-white p-6 shadow-2xl">
      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute right-3 top-3 text-xl text-gray-500 hover:text-black"
      >
        ×
      </button>

      <div className="pr-5">
        <p className="mb-2 text-sm font-semibold text-cyan-600">
          SPECIAL OFFER
        </p>

        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          30% OFF This Month!
        </h2>

        <p className="mb-4 text-gray-600">
          Get 30% discount on dental cleaning and examination this month.
        </p>
        {/* <button
          to="/acontact"
          className="bg-cyan-500 text-white px-7 p-2 rounded-md"
        >
          View More Discount
        </button> */}
      </div>
    </div>
  );
};

export default DiscountPopup;
