import React, { useEffect, useState } from "react";
import api from "../api";

const Salons = () => {
  const [salons, setSalons] = useState([]);

  useEffect(() => {
    api
      .get("/salons")
      .then((response) => {
        setSalons(response.data);
      })
      .catch((error) => {
        console.error("Error fetching salons:", error);
      });
  }, []);

  return (
    <div>
      <h1>Salons</h1>
      <ul>
        {salons.map((salon) => (
          <li key={salon.id}>
            <strong>{salon.name}</strong> — {salon.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Salons;
