var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var timeLocationSchema= new Schema({
  timeLocationID: {type: Number},
  timeObjectID: {type: Number},
  locationID: {type: Number}
})
