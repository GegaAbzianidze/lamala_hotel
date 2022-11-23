import React from "react";
import view_n1 from "../Images/view_N1.png";

function SectionTwo() {
  return (
    <div className="max-h-screen md:mt-16 mt-3">
      <div className="container mx-auto md:px-32 px-4">
        <div className="md:flex items-center py-4 gap-0 md:gap-[23vw]">
          <div className="block md:ml-16">
            <h1 className="font-[Ubuntu] text-4xl text-[#192252] mb-3 text-center md:text-left md:mt-0 mt-6">
              Cozy and Down to Earth Cootage
              <br />
              Hotel in Svaneti.
            </h1>
            <p className="mb-8 text-gray-500">
              Our Cootage Hotel is an intimate hideway concieved for dicerning
              <br />
              travelers. it daces directly the unique and spectacular manorama
              of
              <br />
              hte hallerbos jungle.
              <br />
              <br />
              Cootels extends along a private, quiet, and beautiful nature. stay
              <br />
              away from crownd and enjoy the cozy and beautiful with us.
            </p>
            <div className="md:text-left text-center">
              <a
                href="/"
                className="bg-[#192252] text-white text-sm font-semibold border px-6 py-3 rounded-md"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="px-10 md:px-0">
            <img src={view_n1} alt="Lamala" className="h-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
