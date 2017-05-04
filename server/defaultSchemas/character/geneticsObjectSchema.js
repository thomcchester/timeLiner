var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var geneticsObjectSchema = new Schema({
  geneticID: {type: Number},
  geneticSimilarity: [{
    species: {type: String},
    percentage: {type: String},
    dominateCharacteristics:[
      note: {type: String}
    ]
  }],
  baseGenetics:{type: String} //percent different from 2050 species
  geneticsTag: {type: String} //imunnoSpecific, longevity, strength
})
