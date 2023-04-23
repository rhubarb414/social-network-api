const router = require("express").Router();

const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  createFriend,
} = require("../../controllers/userController.js");

// /api/users
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(createFriend);

module.exports = router;
