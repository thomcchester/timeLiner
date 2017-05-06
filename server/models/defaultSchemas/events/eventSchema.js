var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  eventObjectID: {type: Number},
  timeLocationStart: {type: Number},//timeLocationID
  timeLocationEnd: {type: Number},//timeLocationID
  characterArray: [{type: Number}],//array of characterObjectIDs
  informationArray: [{type: Number}]//array of information objects relevent
})

module.exports = mongoose.model("eventSchema", eventSchema);
