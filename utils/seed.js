const connection = require("../config/connection");
const { Thought, User } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing students
  await User.deleteMany({});

  const users = [
    { username: "Baboon", email: "monkey@zoo.net" },
    { username: "GorillaManana", email: "silverback@gmail.com" },
    { username: "Daisy1000", email: "ranchhandzrule@farm.com" },
  ];
  await User.collection.insertMany(users);
  console.info("Users added");

  await process.exit(0);
});
