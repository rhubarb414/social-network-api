const connection = require("../config/connection");
const { Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thought.deleteMany({});

  await Thought.collection.insertOne({
    thoughtText: "Example thought 1",
    username: "Christopher DuBois",
  });

  console.info("Thought added");
  process.exit(0);
});
