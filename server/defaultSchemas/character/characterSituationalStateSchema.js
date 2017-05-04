var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var characterSituationalStateSchema = new Schema({
  characterSituationalStateID: { type: Number},
  readerPerspective: { type: Number},
  otherCharacterPerspective:[{
    characterID: { type: Number},
    notes: { type: String}
  }],
  characterPerspective: { type: String},
  actual: {type: String}
})

module.exports = mongoose.model("characterSituationalStateSchema", characterSituationalStateSchema);
