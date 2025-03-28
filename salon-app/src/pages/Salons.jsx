// === File: src/pages/Salons.jsx ===
import React, { useEffect, useState } from "react";
import api from "../api";

const Salons = () => {
  const [salons, setSalons] = useState([]);

  useEffect(() => {
    api
      .get("/salons")
      .then((response) => setSalons(response.data))
      .catch((error) => console.error("Error fetching salons:", error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Salons</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {salons.map((salon) => (
          <li
            key={salon.id}
            className="border p-4 rounded-xl shadow-sm bg-white"
          >
            <h3 className="text-xl font-bold">{salon.name}</h3>
            <p>{salon.address}</p>
            <p className="text-gray-500 italic">{salon.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Salons;
