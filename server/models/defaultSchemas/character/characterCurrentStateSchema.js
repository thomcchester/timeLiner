var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var characterCurrentStateSchema = new Schema({
  characterCurrentStateID: { type: Number},
  characterEmotionalStateID: { type: Number},
  characterHealthStateID: { type: Number},
  characterMentalStateID: { type: Number},
  characterPhysicalStateID { type: Number},
  characterSituationalStateID: { type: Number},
  characterSpiritualStateID: { type: Number}
})

module.exports = mongoose.model("characterCurrentStateSchema", characterCurrentStateSchema);
