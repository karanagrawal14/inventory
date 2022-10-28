const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const electronicSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },
    label:{
        type:String,
        default:''
    },
    price:{
        type:Currency,
        required:true,
        min:0
    },
    description:
    {
        type:String,
        default:''
    },
    featured: {
        type: Boolean,
        default:false      
    },


},{
    timestamps:true
})


var Electronics = mongoose.model('Electronic',electronicSchema);
module.exports = Electronics;