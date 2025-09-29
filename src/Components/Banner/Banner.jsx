import React from "react";

const Banner = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center m-2">
          Dependable Care, Backed by Trusted <br /> Professionals.
        </h1>
        <p className="text-center m-6">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a <br />{" "}
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
        <div className="flex items-center justify-center px-4">
          <div className="flex gap-4 w-full max-w-[1000px]">
            <input
              type="text"
              placeholder="Search any Doctor"
              className="input input-bordered rounded-3xl w-full text-center"
            />
            <button className="btn bg-[#176AE5] text-white rounded-3xl border-none px-8">
              Search Now
            </button>
          </div>
        </div>
      </div>
          
      <div className="ml-20">
        <div className="grid grid-cols-2 m-5">
    <img src="../../../assets/banner-img-1.png" alt="banner-img-1" />
           <img src="../../../assets/banner-img-1.png" alt="banner-img-1" />

      </div>
      </div>

    </div>
  );
};

export default Banner;
