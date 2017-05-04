var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var physSchema = new Schema({
  physObjectID: {type: Number},
  timeLocationArray: [{type: Number}],
  possession: [{
    characterID: {type: Number},
    timeLocationStartID: {type: Number},//timeLocationID
    timeLocationEndID: {type: Number}, //timeLocaitonID
  }],
  contact:[{
    characterID: {type: Number},
    timeLocationStartID: {type: Number},//timeLocationID
    timeLocationEndID: {type: Number},//timeLocationID
  }],
  events:[{eventID: {type: Number}}],
  chaptersActual:[{chapterID: {type: Number}}]
})
