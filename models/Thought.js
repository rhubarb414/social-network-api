const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "reaction",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("formatDate").get(function () {
  // update to return a formatted date, dayJS?
  return this.createdAt;
});

// Return number of reactions on a thought.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const reactionSchema = new Schema({
  // reactionId: {
  //   type: ObjectId,
  //   default: new ObjectId(),
  // },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//need a getter method to format the timestamp on query

//export model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
