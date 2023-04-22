const router = require("express").Router();

const {
  getAllThoughts,
  getThought,
} = require("../../controllers/thoughtController.js");

// /api/thoughts
router.route("/").get(getAllThoughts);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getThought);

module.exports = router;
