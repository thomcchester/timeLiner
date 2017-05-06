var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var characterHealthStateSchema = new Schema({
  characterHealthStateID: { type: Number},
  actualState:{
    physicalHealth: { type: String},
    electronics: { type: String},
    immuno: { type: String}
  },
  appearedToReaderState:{
    physicalHealth: { type: String},
    electronics: { type: String},
    immuno: { type: String}
  },
  appearedToOwnCharacterState:{
    physicalHealth: { type: String},
    electronics: { type: String},
    immuno: { type: String}
  },
  appearedToOtherCharacterState: {
    characterID: { type: String},
    physicalHealth: { type: String},
    electronics: { type: String},
    immuno: { type: String}
  }
})
module.exports = mongoose.model("characterHealthStateSchema", characterHealthStateSchema);
