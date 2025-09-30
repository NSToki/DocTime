import React from "react";
import { Link } from "react-router";


const Doctor = ({ singleDoc }) => {
  const {docId, docName, image, speciality, experience_years, registration_number} = singleDoc;

  return (
    <div className="card bg-base-300 shadow-sm rounded-lg overflow-hidden m-4 w-[400px]">
      {/* Doctor Image */}
      <figure>
        <img src={image} alt={docName} className="w-3/4 h-3/4 object-cover p-2" />
      </figure>

      <div className="flex justify-between gap-1 mb-2">
          <span className="rounded-3xl px-8 border bg-[#E7F5EB] text-[#09982F] mx-3">Experience: {experience_years} years</span>
          <span className="rounded-3xl px-8 border text-[#176AE5] bg-[#E8F1FD] mx-3">Available</span>
        </div>


      
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{docName}</h2>
        <p className="text-gray-600">{speciality}</p>
        <hr className="border-gray-300 my-3 border-dashed" />

        
      <span>
            <span className="">Reg No: {registration_number}</span>
      </span>

       
        <Link to={`/DocDetails/${docId}`}>
        <div>
           <button className="btn items-center border-[#176AE5] border-solid  text-[#176AE5] rounded-3xl px-8">
              View Details
            </button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
