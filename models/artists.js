// Module dependencies
var mongoose = require('mongoose');

//Schema
var ArtistSchema = new mongoose.Schema({
	name: {type:String,require:true},
	slug: {type:String,require:true}
});

//return model
module.exports = mongoose.model('Artist', ArtistSchema);