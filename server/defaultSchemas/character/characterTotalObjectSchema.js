var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var characterTotalObjectSchema = new Schema({
  characterTotalObjectID: {type: Number},
  backgroundCharacterObjectID: {type: Number},
  charactersPath: [
    {
      characterTimeObjectID: {type: Number},
      eventObjectID: {type: Number},
      chapterObjectID: {type: Number},
      timeLocationID: {type: Number}
    }
  ]
})
