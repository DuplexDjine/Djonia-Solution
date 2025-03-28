// === Fichier : app.js ===
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const seedUsersRoute = require("./routes/seedUsers");
const seedSalonsRoute = require("./routes/seedSalons");
const usersRoute = require("./routes/users");
const salonsRoute = require("./routes/salons");
const servicesRoute = require("./routes/services");

app.use("/api/seed-users", seedUsersRoute);
app.use("/api/seed-salons", seedSalonsRoute);
app.use("/api/users", usersRoute);
app.use("/api/salons", salonsRoute);
app.use("/api/services", servicesRoute);

app.get("/", (req, res) => {
  res.send("Serveur backend coiffure OK ✅");
});

module.exports = app;
