// === Fichier : routes/seedUsers.js ===
const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");

router.post("/", async (req, res) => {
  const users = [
    {
      nom: "Ali",
      email: "ali@example.com",
      mot_de_passe: "pass123",
      role: "client",
    },
    {
      nom: "Mariam",
      email: "mariam@example.com",
      mot_de_passe: "pass123",
      role: "coiffeur",
    },
    {
      nom: "Sofiane",
      email: "sofiane@example.com",
      mot_de_passe: "pass123",
      role: "client",
    },
    {
      nom: "Awa",
      email: "awa@example.com",
      mot_de_passe: "pass123",
      role: "coiffeur",
    },
    {
      nom: "John",
      email: "john@example.com",
      mot_de_passe: "pass123",
      role: "client",
    },
    {
      nom: "Julie",
      email: "julie@example.com",
      mot_de_passe: "pass123",
      role: "coiffeur",
    },
    {
      nom: "Nina",
      email: "nina@example.com",
      mot_de_passe: "pass123",
      role: "client",
    },
    {
      nom: "Karim",
      email: "karim@example.com",
      mot_de_passe: "pass123",
      role: "coiffeur",
    },
    {
      nom: "Fatou",
      email: "fatou@example.com",
      mot_de_passe: "pass123",
      role: "client",
    },
    {
      nom: "Omar",
      email: "omar@example.com",
      mot_de_passe: "pass123",
      role: "coiffeur",
    },
  ];

  const emails = users.map((u) => u.email);
  const { data: existingUsers, error: readError } = await supabase
    .from("users")
    .select("email")
    .in("email", emails);
  const existingEmails = existingUsers.map((u) => u.email);
  const usersToInsert = users.filter((u) => !existingEmails.includes(u.email));

  if (usersToInsert.length === 0) {
    return res
      .status(200)
      .json({ message: "Aucun nouvel utilisateur à insérer." });
  }

  const { data, error } = await supabase
    .from("users")
    .insert(usersToInsert)
    .select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({ message: "Utilisateurs insérés avec succès.", data });
});

module.exports = router;
