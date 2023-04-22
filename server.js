const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for socialDB running on port ${PORT}!`);
  });
});

// const express = require("express");
// // Run npm install mongodb and require mongodb and MongoClient class
// const { MongoClient } = require("mongodb");

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Connection string to local instance of MongoDB
// const connectionStringURI = `mongodb://127.0.0.1:27017`;

// // Initialize a new instance of MongoClient
// const client = new MongoClient(connectionStringURI);

// // Declare a variable to hold the connection
// let db;

// // Create variable to hold our database name
// const dbName = "shelterDB";

// // Use connect method to connect to the mongo server
// client
//   .connect()
//   .then(() => {
//     console.log("Connected successfully to MongoDB");
//     // Use client.db() constructor to add new db instance
//     db = client.db(dbName);

//     // start up express server
//     app.listen(port, () => {
//       console.log(`Example app listening at http://localhost:${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Mongo connection error: ", err.message);
//   });

// // Built in Express function that parses incoming requests to JSON
// app.use(express.json());

// app.post("/create", (req, res) => {
//   // Use db connection to add a document
//   db.collection("petCollection")
//     .insertOne({ name: req.body.name, breed: req.body.breed })
//     .then((results) => res.json(results))
//     .catch((err) => {
//       if (err) throw err;
//     });
// });

// app.get("/read", (req, res) => {
//   // Use db connection to find all documents in collection
//   db.collection("petCollection")
//     .find()
//     .toArray()
//     .then((results) => res.json(results))
//     .catch((err) => {
//       if (err) throw err;
//     });
// });
