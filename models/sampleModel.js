/**
 * Created by jafarnaqvi on 09/08/16.
 */
var mongoose = require('mongoose');


var MembersSchema = mongoose.Schema({


    id: {type: String},
    primary_name:{type:String},
    location: {type: String},
    names: {type: [String]}
});


module.exports = mongoose.model('members', MembersSchema);