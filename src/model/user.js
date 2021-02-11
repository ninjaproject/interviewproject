const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    weight:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
   
});


const userproductmodel=new mongoose.model('product',userSchema);

module.exports=userproductmodel;