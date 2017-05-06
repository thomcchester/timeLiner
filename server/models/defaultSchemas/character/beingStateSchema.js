var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var beingStateSchema = new Schema({
  beingStateObjectID: { type: Number},
  biologiqueID: { type: Number},
  geneticsObjectID: { type: Number},
  machineObjectID: { type: Number}
})

module.exports = mongoose.model("beingStateSchema", beingStateSchema);
