const router = require("express").Router();

const {
  getAllUsers,
  getUser,
  createUser,
} = require("../../controllers/userController.js");

// /api/users
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:userId

router.route("/:userId").get(getUser);

module.exports = router;
