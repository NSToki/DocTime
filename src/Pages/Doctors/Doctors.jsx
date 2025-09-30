import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/DoctorsData.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort doctors by experience (descending)
        const sortedDoctors = [...data].sort(
          (a, b) => b.experience_years - a.experience_years
        );
        setAllDoctors(sortedDoctors);
      })
      .catch((err) => console.error("Error loading doctors:", err));
  }, []);

  // Show only top 6 if not expanded
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

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctorsToShow.map((doc) => (
          <Doctor key={doc.docId} singleDoc={doc} />
        ))}
      </div>

      {/* View All / Show Less Button */}
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
    </div>
  );
};

export default Doctors;
