var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var Grocery = new Schema({
	category: { type: String, required: true},
	brand: { type: String, required: true}
});

mongoose.model( 'Grocery', Grocery );
mongoose.connect( 'mongodb://localhost/Piknik' );
