const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const SalesSchema = new Schema({
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
        required:true
        
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
    Bill_to_Party:{
        type:String,
        required:true
    },
    Ship_to_Party:{
        type:String,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Price:{
        type:Currency,
        required:true
    },
    GST:{
        type:Number,
        required:true
    },
    Total_Price:{
        type:Currency,
        required:true
    },
    Total_Price_Excluding_Gst:{
        type:Currency,
        required:true
    }




},{
    timestamps:true
})


var Sales = mongoose.model('SaleMTD',SalesSchema);
module.exports = Sales;