var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var physicalAttributesObjectSchema = new Schema({
  physicalAttributesObjectID: {type: Number},
  _comment: {type: String},//bone graphs, claws, artifical fiberss,
  tags: {type: String}
})
