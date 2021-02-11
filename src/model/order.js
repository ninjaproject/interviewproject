const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    productorder:{
        
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
            required: true,        
           
    },
    customerorder:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'customer',
            required: true,
            
    },
    isPaid:
     { type: Boolean, default: false },
});


const ordermodel=new mongoose.model('order',orderSchema);

module.exports=ordermodel;