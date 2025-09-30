const getStoredDocData = () => {
  const storedDoctorSTR = localStorage.getItem("appDoc");
  if (storedDoctorSTR) {
    const storedDocData = JSON.parse(storedDoctorSTR);
    return storedDocData.map((id) => parseInt(id));
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedDocData = getStoredDocData();

  if (storedDocData.includes(id)) {
    alert("You already have an appointment with this doctor");
  } else {
    storedDocData.push(id);
    localStorage.setItem("appDoc", JSON.stringify(storedDocData));
    console.log(storedDocData);
    alert("Appointment booked successfully");
  }
};

export { addToStoredDB,getStoredDocData };
