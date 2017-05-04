var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var backgroundSchema = new Schema({
  backgroundID: { type: Number},
  birthBeingStateID: { type: Number},
  importantBackgroundStateChanges: [
    {
      timeLocationID: { type: Number},
      notes: { type: String},
      previousStateTimeObjectID: { type: String},
      newStateTimeObjectID: { type: String}
    }
  ]
})
