const router = require("express").Router();

const { getAllUsers, getUser } = require("../../controllers/userController.js");

// /api/users
router.route("/").get(getAllUsers);

// /api/users/:userId

router.route("/:userId").get(getUser);

module.exports = router;
