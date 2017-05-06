var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var biologiqueSchema = new Schema({
  biologiqueID: { type: Number},
  types: [
    {
      size: { type: Number},
      intelligence: { type: Number},
      quantity: { type: Number},
      percentageMass: { type: Number},
      percentageCells: { type: Number},
      percentageIntelligence: { type: Number}
    }
  ],
  tags:[{ type: String }]
})

module.exports = mongoose.model("biologiqueSchema", biologiqueSchema);
