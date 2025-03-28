// === File: src/pages/Services.jsx ===
import React, { useEffect, useState } from "react";
import api from "../api";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api
      .get("/services")
      .then((response) => setServices(response.data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Services</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <li
            key={service.id}
            className="border p-4 rounded-xl shadow-sm bg-white"
          >
            <h3 className="text-xl font-bold">{service.name}</h3>
            <p>
              💲 {service.price} - ⏱ {service.duration_minutes} mins
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
