var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Search = new Schema({
	category: { type: String, required: true},
	brand: { type: String, required: true}
});

mongoose.model( 'Search', Search );
mongoose.connect( 'mongodb://localhost/Piknik' );
