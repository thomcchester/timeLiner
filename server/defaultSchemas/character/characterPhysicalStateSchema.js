var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var characterPhysicalStateSchema = new Schema({
  characterPhysicalStateID: { type: Number},
  actualState: {
    internalPrimaryPhysicalState: { type: String},
    externalPrimayPhysicalState: { type: String},
    internalSecondaryPhysicalState: [{ type: String}],
    exterterSecondaryPhysicalState: [{ type: String}]
  },
  appearedToReaderState: {
    internalPrimaryPhysicalState: { type: String},
    externalPrimayPhysicalState: { type: String},
    internalSecondaryPhysicalState: [{ type: String}],
    exterterSecondaryPhysicalState: [{ type: String}]
  },
  appearedToOwnPhysicalState:{
    internalPrimaryPhysicalState: { type: String},
    externalPrimayPhysicalState: { type: String},
    internalSecondaryPhysicalState: [{ type: String}],
    exterterSecondaryPhysicalState: [{ type: String}]
  },
  appearedToOtherCharacterState: [
    {
      characterID: { type: String},
      internalPrimaryPhysicalState: { type: String},
      externalPrimayPhysicalState: { type: String},
      internalSecondaryPhysicalState: [{ type: String}],
      exterterSecondaryPhysicalState: [{ type: String}]
    }
  ]
})

module.exports = mongoose.model("characterPhysicalStateSchema", characterPhysicalStateSchema);
