const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const stockSchema = new Schema({
    EAN_Code:{
        type:Number,
        required:true,
        // unique:true
    },
    Item_Description:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Brand:{
        type:String,
        required:true,
        
    },
    Color:
    {
        type:String,
        required:true
    },
    Size: {
        type: String,
        required:true      
    },
    Quantity:{
        type:Number,
        require:true
    }


},{
    timestamps:true
})


var Stocks = mongoose.model('Stock',stockSchema);
module.exports = Stocks;