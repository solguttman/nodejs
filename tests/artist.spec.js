// Database connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/villageten');

// Unit under test
var Artist = require('../models/artists');

//Assertion libarary
var expect = require('chai').expect;

// The tests
/* describe('Artist model',function(){
	it('should save a new artist',function(){
		
		beforeEach(function(done){
			Artist.remove(done);
		});
		
		afterEach(function(done){
			Artist.remove(done);
		});
		
		Artist.create({
			name : 'My band',
			slug : 'my-band'
		},function(err,artist){
			expect(err).to.not.exist;
			expect(artist._id).to.exist;
			expect(artist.name).to.equal('My Band');
			expect(artist.slug).to.equal('my-band');
			done();
		});
	});
}); */