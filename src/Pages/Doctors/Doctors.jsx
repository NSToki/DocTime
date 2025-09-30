import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import CountUp from "react-countup";

import totalDoc from "../../../assets/success-doctor.png";
import totalReview from "../../../assets/success-review.png";
import totalPatients from "../../../assets/success-patients.png";
import totalStuff from "../../../assets/success-staffs.png";

const Doctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/DoctorsData.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedDoctors = [...data].sort(
          (a, b) => b.experience_years - a.experience_years
        );
        setAllDoctors(sortedDoctors);
      })
      .catch((err) => console.error("Error loading doctors:", err));
  }, []);

  const doctorsToShow = showAll ? allDoctors : allDoctors.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Our Best Doctors</h1>
        <p className="text-gray-600">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a <br />
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctorsToShow.map((doc) => (
          <Doctor key={doc.docId} singleDoc={doc} />
        ))}
      </div>

      
      <div className="flex justify-center mt-8">
        {allDoctors.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn bg-[#176AE5] text-white rounded-3xl border-none px-8"
          >
            {showAll ? "Show Less" : "View All Doctors"}
          </button>
        )}
      </div>

     
      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold mb-2">We Provide Best Medical Services</h1>
        <p className="text-gray-600">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-10">
        {/* Total Doctors */}
        <div className="card bg-base-100 shadow-sm text-center p-6">
          <figure className="px-6 pt-6">
            <img src={totalDoc} alt="Total Doctors" className="w-16 h-16 rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-2xl font-bold">
              <CountUp start={0} end={199} duration={3} />+
            </h2>
            <p className="text-gray-600">Total Doctors</p>
          </div>
        </div>

        
        <div className="card bg-base-100 shadow-sm text-center p-6">
          <figure className="px-6 pt-6">
            <img src={totalReview} alt="Total Reviews" className="w-16 h-16 rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-2xl font-bold">
              <CountUp start={0} end={467} duration={5} separator="," />+
            </h2>
            <p className="text-gray-600">Total Reviews</p>
          </div>
        </div>

      
        <div className="card bg-base-100 shadow-sm text-center p-6">
          <figure className="px-6 pt-6">
            <img src={totalPatients} alt="Total Patients" className="w-16 h-16 rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-2xl font-bold">
              <CountUp start={0} end={1900} duration={10} separator="," />+
            </h2>
            <p className="text-gray-600">Patients</p>
          </div>
        </div>

    
        <div className="card bg-base-100 shadow-sm text-center p-6">
          <figure className="px-6 pt-6">
            <img src={totalStuff} alt="Total Staffs" className="w-16 h-16 rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-2xl font-bold">
              <CountUp start={0} end={300} duration={5} />+
            </h2>
            <p className="text-gray-600">Total Staffs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
