const { Thought, User } = require("../models");

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single thought by ID
  getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          // 404 only sent if ID matches proper ID format. Otherwise 500 catch err sent.
          res.status(404).json({
            message: `Thought ID ${req.params.thoughtId} does not exist`,
          });
        } else {
          res.json({ thought });
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Add new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => {
        return User.findOneAndUpdate(
          { username: dbThoughtData.username },
          { $addToSet: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: `User ${user.username} not found.` })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Update thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: `Thought ${req.params.thoughtId} not found` })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: `Thought not found` })
          : res.json({ message: `Thought successfully deleted.` })
      )
      .catch((err) => res.status(500).json(err));
  },
};
