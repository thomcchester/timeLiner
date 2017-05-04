var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var informationSchema = new Schema({
  informationObjectID: {type: Number},
  chapterArray:[{type: Number}], //chapters that it works in
  characterArray: [{type: Number}],
  physObjectArray: [{type: Number}],
  timeLocationArray: [{type: Number}],
  strings: {type: String}
})
