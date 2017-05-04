var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var characterSpiritualStateSchema = new Schema({
  characterSpiritualStateID: { type: Number},
  actualState: {
    oneTooTen: { type: Number},
    internalPrimarySpiritualState: { type : String},
    externalPrimarySpiritualState: { type: String},
    internalSecondarySpiritualState: [{ type: String}],
    externalSecondarySpiritualState: [{ type: String}]
  },
  appearedToReaderState:{
    oneTooTen: { type: Number},
    internalPrimarySpiritualState: { type : String},
    externalPrimarySpiritualState: { type: String},
    internalSecondarySpiritualState: [{ type: String}],
    externalSecondarySpiritualState: [{ type: String}]
  },
  appearedToOwnCharacterState: {
    oneTooTen: { type: Number},
    internalPrimarySpiritualState: { type : String},
    externalPrimarySpiritualState: { type: String},
    internalSecondarySpiritualState: [{ type: String}],
    externalSecondarySpiritualState: [{ type: String}]
  },
  appearedToAnotherCharacterState:[{
    oneTooTen: { type: Number},
    characterID:{ type: String}
    internalPrimarySpiritualState: { type : String},
    externalPrimarySpiritualState: { type: String},
    internalSecondarySpiritualState: [{ type: String}],
    externalSecondarySpiritualState: [{ type: String}]
  }]
})
