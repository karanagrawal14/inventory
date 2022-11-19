const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const orderSchema = new Schema({
    Bill_To_Party:{
        type:String,
        required:true
    },
    Ship_To_Party:{
        type:String,
        required:true
    },
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
    },
    Order_Status:{
        type:String,
        required:true
    }





},{
    timestamps:true
})


var Orders = mongoose.model('CompletedOrder',orderSchema);
module.exports = Orders;