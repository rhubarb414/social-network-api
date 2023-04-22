const { User } = require("../models");

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
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
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
};
