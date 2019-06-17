var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var headlineSchema = new Schema({

  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },

  summary: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  time: {
    type: String,
    default: Date.now
  },

  image: {
    type: String,
    required: false
  },

  saved: {
    type: Boolean,
    default: false
  },
});


var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;
