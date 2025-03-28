// === Fichier : routes/seedSalons.js ===
const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");

router.post("/", async (req, res) => {
  try {
    const { data: coiffeurs, error: coiffeursError } = await supabase
      .from("users")
      .select("id")
      .eq("role", "coiffeur");

    if (coiffeursError) {
      return res.status(500).json({ error: coiffeursError.message });
    }

    const salons = coiffeurs.slice(0, 5).map((coiffeur, i) => ({
      nom: `Salon Démo ${i + 1}`,
      adresse: `${10 + i} rue des Tests`,
      description: `Salon automatique numéro ${i + 1}`,
      proprietaire_id: coiffeur.id,
    }));

    const { data, error } = await supabase
      .from("salons")
      .insert(salons)
      .select("*");

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: "Salons insérés avec succès.", data });
  } catch (err) {
    res.status(500).json({ error: "Erreur interne." });
  }
});

module.exports = router;
