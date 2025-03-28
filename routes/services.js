// === Fichier : routes/services.js ===
const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");

router.post("/", async (req, res) => {
  try {
    const { nom, prix, duree_minutes, salon_id } = req.body;

    if (!nom || !prix || !duree_minutes || !salon_id) {
      return res
        .status(400)
        .json({
          error:
            "Tous les champs sont requis (nom, prix, duree_minutes, salon_id).",
        });
    }

    const { data, error } = await supabase
      .from("services")
      .insert([{ nom, prix, duree_minutes, salon_id }])
      .select("*");

    if (error) return res.status(500).json({ error: error.message });

    res.status(201).json({ message: "Service ajouté avec succès", data });
  } catch (err) {
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
});

router.get("/", async (req, res) => {
  try {
    const { salon_id } = req.query;

    let query = supabase.from("services").select("*");
    if (salon_id) query = query.eq("salon_id", salon_id);

    const { data, error } = await query;
    if (error) return res.status(500).json({ error: error.message });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
});

module.exports = router;
