var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var characterEmotionalStateSchema = new Schema({
  characterEmotionalStateID: { type: Number},
  actualState: {
    oneTooTen: { type: Number},
    internalPrimaryEmotionalState: { type : String},
    externalPrimaryEmotionalState: { type: String},
    internalSecondaryEmotionalState: [{ type: String}],
    externalSecondaryEmotionalState: [{ type: String}]
  },
  appearedToReaderState:{
    oneTooTen: { type: Number},
    internalPrimaryEmotionalState: { type : String},
    externalPrimaryEmotionalState: { type: String},
    internalSecondaryEmotionalState: [{ type: String}],
    externalSecondaryEmotionalState: [{ type: String}]
  },
  appearedToOwnCharacterState: {
    oneTooTen: { type: Number},
    internalPrimaryEmotionalState: { type : String},
    externalPrimaryEmotionalState: { type: String},
    internalSecondaryEmotionalState: [{ type: String}],
    externalSecondaryEmotionalState: [{ type: String}]
  },
  appearedToAnotherCharacterState:[{
    oneTooTen: { type: Number},
    characterID:{ type: String}
    internalPrimaryEmotionalState: { type : String},
    externalPrimaryEmotionalState: { type: String},
    internalSecondaryEmotionalState: [{ type: String}],
    externalSecondaryEmotionalState: [{ type: String}]
  }]
})

module.exports = mongoose.model("characterEmotionalStateSchema", characterEmotionalStateSchema);
