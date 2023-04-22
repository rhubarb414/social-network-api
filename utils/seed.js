const connection = require("../config/connection");
const { Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thought.deleteMany({});

  const thoughts = [
    { thoughtText: "Example thought 1", username: "Christopher DuBois" },
    { thoughtText: "Another example thought", username: "bigbug" },
    { thoughtText: "I wonder what you think about this", username: "oofus212" },
  ];

  await Thought.collection.insertMany(thoughts);

  console.info("Thoughts added");
  process.exit(0);
});
