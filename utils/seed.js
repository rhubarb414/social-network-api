const connection = require("../config/connection");
const { Thought, User } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thought.deleteMany({});

  //Drop existing students
  await User.deleteMany({});

  const users = [
    { username: "Baboon", email: "monkey@zoo.net" },
    { username: "GorillaManana", email: "silverback@gmail.com" },
    { username: "Daisy1000", email: "ranchhandzrule@farm.com" },
  ];
  await User.collection.insertMany(users);
  console.info("Users added");

  const thoughts = [
    { thoughtText: "Example thought 1", username: "Baboon" },
    { thoughtText: "Another example thought", username: "GorillaManana" },
    {
      thoughtText: "I wonder what you think about this",
      username: "Daisy1000",
    },
  ];

  await Thought.collection.insertMany(thoughts);
  console.info("Thoughts added");

  //   const dbThoughtData = await Thought.find();
  //   //   console.log(dbThoughtData);

  //   setTimeout(() => {
  //     Thought.find().forEach(async (thought) => {
  //       console.log(thought);
  //       await User.findOneAndUpdate(
  //         { username: thought.username },
  //         { $addToSet: { thoughts: thought._id } },
  //         { new: true }
  //       );
  //     });
  //   }, "1000");

  //   for (let index = 0; index < dbThoughtData.length; index++) {
  //     User.findOneAndUpdate(
  //       { username: dbThoughtData[index].username },
  //       { $addToSet: { thoughts: dbThoughtData[index]._id } },
  //       { new: true }
  //     );
  //   }
  //   dbThoughtData.forEach((thought) => {
  //     User.findOneAndUpdate(
  //       { username: thought.username },
  //       { $addToSet: { thoughts: thought._id } },
  //       { new: true }
  //     );
  //   });

  // Thought.collection.forEach(async (thought) => {
  //   await User.collection.findOneAndUpdate(
  //     { username: thought.username },
  //     { $addToSet: { thoughts: thoughts._id } }
  //   );
  // });
  //   await User.collection.updateMany(
  //     { username: thoughts.username },
  //     { $addToSet: { thoughts: thoughts._id } }
  //   );
  //   console.info("User thoughts arrays updated");

  await process.exit(0);
});
