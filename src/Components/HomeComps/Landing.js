import React from "react";
import LamalaImg from "../Images/Lamala_thumb.png";

function Landing() {
  return (
    <div className="max-h-screen md:mt-16 mt-3">
      <div className="container mx-auto md:px-32 px-4">
        <div className="md:flex items-center justify-between py-4">
          <div className="block">
            <h1 className="font-[Ubuntu] text-5xl text-[#192252] mb-3">
              Nature,Warmth, and <br />
              Beauty in one Space
            </h1>
            <p className="mb-4 text-gray-500">
              one place to release all the stress,bring back happiness,
              <br />
              and get back to nature. we provide the best room and
              <br /> nature for you come visit us anythime you want
            </p>
            <a
              href="/"
              className="bg-[#192252] text-white text-sm font-semibold border px-6 py-3 rounded-md"
            >
              Reservation
            </a>
          </div>
          <div className="mt-20 md:mt-0">
            <img
              src={LamalaImg}
              alt="Lamala"
              className="aspect-square md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
