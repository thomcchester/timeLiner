var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var machineObjectSchema = new Schema({
  machineID: {type: Number},
  types: [{
    size:{type: Number},
    tech:{type: String},
    intelligence:{
      processing:{
        capacity:{ type: String},
        format: { type: String}
      }
      storage:{
        capacity: {type: String},
        format: {type: String},
      },
      generalized: {type: String}
      intelligenceOrder: {type: String}
    },
    quantity:{type: Number},
    percentMass:{type: Number},
    percentVolume: {type: Number},
    percentIntelligence: {type: Number}
  }],

})
