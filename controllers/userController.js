const { User } = require("../models");

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get single user by ID
  getUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        // trying a ternary from the miniproj instead of an if statement
        !user
          ? res
              .status(404)
              .json({ message: `User ${req.params.userId} not found` })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Add new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  // Update user

  // Delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: `User not found` })
          : res.json({ message: `User successfully deleted.` })
      )
      .catch((err) => res.status(500).json(err));
  },
};
