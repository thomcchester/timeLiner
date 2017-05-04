var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var characterTimeObjectSchema = new Schema({
  characterTimeObjectID: {type: Number},
  characterCurrentStateID: {type: Number},
  characterBeingObjectID: {type: Number},
})

module.exports = mongoose.model("characterTimeObjectSchema", characterTimeObjectSchema);
