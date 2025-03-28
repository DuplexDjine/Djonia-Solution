// === Fichier : routes/salons.js ===
const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");

router.post("/", async (req, res) => {
  try {
    const { nom, adresse, description, proprietaire_id } = req.body;

    if (!nom || !proprietaire_id) {
      return res.status(400).json({ error: "Champs requis manquants." });
    }

    const { data, error } = await supabase
      .from("salons")
      .insert([{ nom, adresse, description, proprietaire_id }])
      .select("*");

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: "Salon créé avec succès", data });
  } catch (err) {
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
});

router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("salons").select("*");
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erreur interne." });
  }
});

module.exports = router;
