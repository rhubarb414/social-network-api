const { User, Thought } = require("../models");

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
        // Trying a ternary from the miniproj instead of an if statement
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
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      // Run email validator, and return updated object
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: `User ${req.params.userId} not found` })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: `User not found` })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: "User profile and throughts deleted" }))
      .catch((err) => res.status(500).json(err));
  },

  // Add friend
  createFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: `User ${req.params.userId} not found` })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: `User ${req.params.userId} not found` })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
