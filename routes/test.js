const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");

router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("test_table").select("*");

  if (error) return res.status(500).json({ error });

  res.json(data);
});

module.exports = router;
