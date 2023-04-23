const router = require("express").Router();

const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
} = require("../../controllers/userController.js");

// /api/users
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:userId

router.route("/:userId").get(getUser).delete(deleteUser);

module.exports = router;
