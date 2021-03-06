// Schemas allow us to tell MongoDB what kind of data we will send, looks like JSON data

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  members: [{
    type: String,
    required: true
  }]
});

module.exports = mongoose.model("Groups", GroupSchema);