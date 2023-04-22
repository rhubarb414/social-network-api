const router = require("express").Router();

const { getThoughts } = require("../../controllers/thoughtController.js");

// /api/thoughts
router.route("/").get(getThoughts);

module.exports = router;
