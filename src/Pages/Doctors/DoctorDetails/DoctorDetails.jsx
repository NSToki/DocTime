import React from "react";
import { useLoaderData, useParams } from "react-router";
import { RiErrorWarningLine } from "react-icons/ri";
import {addToStoredDB} from "../../../Utility/addToDB"

const DoctorDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const singleDoc = data.find((doc) => doc.docId === parseInt(id));

  if (!singleDoc) {
    return (
      <p className="text-center text-red-500 mt-20 text-xl">
        Doctor not found!
      </p>
    );
  }

  const handleAppointment = id =>{

    addToStoredDB(id);
  }



  const {
    docId,
    docName,
    image,
    speciality,
    experience_years,
    registration_number,
    education,
    current_hospital,
    availability,
    consultation_fee,
  } = singleDoc;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Add margin between Navbar and Header */}
      <div className="mt-6"></div>

      {/* Header */}
      <div className="w-full bg-white py-10 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Doctors Profile Details
        </h1>
        <p className="text-center mt-3 max-w-2xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim
          blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis
          vitae tempus facilisis turpis imperdiet mattis donec dignissim
          volutpat.
        </p>
      </div>

      {/* Main Content */}
      <div className="py-10">
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3">
          {/* Left: Image */}
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-md border border-gray-300 p-2">
              <img
                src={image}
                alt={docName}
                className="w-80 h-[28rem] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right: Doctor Info */}
          <div className="col-span-2 bg-white p-6 rounded-xl shadow-md space-y-4">
            <h1 className="text-3xl font-bold">{docName}</h1>

            <div>
              <span className="font-semibold">Education:</span>
              <ul className="list-disc ml-5 mt-2">
                {education?.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg mt-2">
                <span className="font-medium">{speciality}</span>
              </p>
            </div>

            <p className="text-gray-700 text-lg">
              Working At <br />
              <span className="text-black font-bold text-2xl">
                {current_hospital}
              </span>
            </p>

            <hr className="border-dashed border-gray-400 my-2" />

            <p>
              <span className="font-semibold">Registration No:</span>{" "}
              {registration_number}
            </p>

            <hr className="border-dashed border-gray-400 my-2" />

            <p>
              Availability:{" "}
              <span className="font-medium text-green-600">{availability}</span>
            </p>

            <p>
              <span className="font-semibold">Experience:</span>{" "}
              {experience_years} years
            </p>

            <p>
              Consultation Fee: {consultation_fee} (incl. VAT) Per consultation
            </p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="max-w-6xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-3">Book an Appointment</h1>
        <hr className="border-dashed border-gray-400 mb-3" />
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="font-semibold">Availability</p>
            <p className="text-green-600 font-medium">{availability}</p>
          </div>
          <hr className="border-dashed border-gray-400 my-2" />
          <p className="flex items-center gap-2 p-4 text-[#FFA000] bg-[#FFF6E6] rounded-3xl">
            <RiErrorWarningLine className="w-6 h-6" />
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>

          <button onClick={()=> handleAppointment(docId)} className="mt-4 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Book Appointment Now
          </button>
        </div>
      </div>

     

    </div>
  );
};

export default DoctorDetails;
