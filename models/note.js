var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var noteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  time: {
    type: String,
    default: Date.now
  },
  noteText: String
});
var Note = mongoose.model("Note", noteSchema);
module.exports = Note;
