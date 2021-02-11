const mongoose=require('mongoose');
const customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
       
    },
    contact:{
        type:Number,
        required:true,
    },
    product_name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    }
    
   
});


const customertmodel=new mongoose.model('customer',customerSchema);

module.exports=customertmodel;