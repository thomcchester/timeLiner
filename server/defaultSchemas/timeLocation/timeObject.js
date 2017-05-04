var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var timeSchema = new Schema({
  timeObjectID: {type: Number},
  current:{
    year: {type: Number},
    month: {type: Number},
    day: {type: Number},
    hour: {type: Number},
    minute: {type: Number},
    second: {type: Number}
  },
  inUniverse:{
    yearth:{type: Number},//years since transcendance on earth,
    pastDialation: {type: Number},
    e12cD: {type: Number}, //how much dialation would occur travelling at 10^12c back to earth
    e9cD: {type: Number},
    e6cD: {type: Number},
    e3cD: {type: Number},
    cD: {type: Number},
    point9cD: {type: Number},
    point5cD: {type: Number}
  }
})
