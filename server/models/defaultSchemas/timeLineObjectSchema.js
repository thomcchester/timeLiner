var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var timeLineObjectBase = new Schema({
  timeLineObjectID: { type: Number },
  characters: {[{characterTotalObjectID: Number}]},
  events: {[{eventObjectID: Number}]},
  informationObject: {[{informationObjectID: Number}]},
  chapters: {[{chapterID: Number}]},
  timeLocations: {[{timeLocationID: Number}]}
})
module.exports = mongoose.model("timeLineObjectSchema", timeLineObjectSchema);
