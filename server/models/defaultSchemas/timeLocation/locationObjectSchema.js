var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var locationSchema = new Schema({
  locationObjectID: {type: Number},
  galaxy: {type: Number},
  localArm: {type: Number},
  threeStar:{
    starOne: {type: Number},
    starTwo: {type: Number},
    starThree: {type: Number}
  },
  localTime: {type: Number}
})
