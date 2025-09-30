import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredDocData } from "../../../Utility/addToDB";

const AppointmentDoctor = () => {
  const [appDoc, setAppDoc] = useState([]);
  const data = useLoaderData(); // full doctors data

  useEffect(() => {
    if (data) {
      const bookedIds = getStoredDocData();
      const bookedDoctors = data.filter((doc) => bookedIds.includes(doc.docId));
      setAppDoc(bookedDoctors);
    }
  }, [data]);

   const handleCancel = (docId) => {
    // remove doctor ID from localStorage
    const storedIds = getStoredDocData().filter((id) => id !== docId);
    localStorage.setItem("appDoc", JSON.stringify(storedIds));
    // update state to remove from UI
    setAppDoc(appDoc.filter((doc) => doc.docId !== docId));
  };

  if (!data)
    return (
      <p className="text-center mt-10 text-gray-600">Loading appointments...</p>
    );

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">My Appointments</h1>
      <p className="text-center pb-5">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>

      {appDoc.length === 0 ? (
        <p className="text-gray-500 text-center">No appointments booked yet.</p>
      ) : (
        <ul className="space-y-6">
          {appDoc.map((doc) => (
            <li
              key={doc.docId}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="md:flex">
                {/* Doctor Image */}
                <div className="md:flex-shrink-0"></div>

                {/* Doctor Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {doc.docName}
                    </h2>
                    <div className="p-6 flex justify-between">
                      <div>
                        <p className="text-gray-700 mt-1">{doc.speciality}</p>
                        <p className="text-gray-700 mt-1">
                          Hospital:{" "}
                          <span className="font-medium">
                            {doc.current_hospital}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-700 mt-1">
                          Appointment Fee:{" "}
                          <span className="text-green-600">
                            {doc.consultation_fee}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

            
                  <div className="mt-4 flex gap-3">
                    <button onClick={() => handleCancel(doc.docId)} className="btn btn-outline btn-error w-full">
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentDoctor;
