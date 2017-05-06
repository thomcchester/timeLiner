var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var chapterSchema = new Schema({
  chapterObjectID: { type: Number},
  eventArray: [{ eventID: { type: Number}}],
  timeLocationArray:[{ timeLocationID: { type: Number}}],
  characterArray:[{ characterID: { type: Number}}],
  physObjectArray: [{ physObjectID: { type: Number}}],
  informationArray: [{ informationID: { type: Number}}]
})


module.exports = mongoose.model("chapterSchema", chapterSchema);
