var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var Grocery = new Schema({
	category: { type: String, required: true},
	brand: { type: String, required: true},
	price: { type: String, required: true},
	size: {type: String}
});

mongoose.model( 'Grocery', Grocery );
mongoose.connect( 'mongodb://localhost/Piknik' );
