const express=require('express');
const app=express();
require('./db/conn');
const port=process.env.PORT || 3006;
const Modelproduct=require('./model/user');
const Modelcustomer=require('./model/customer');
const Modelorder=require('./model/order');
const mongoose=require('mongoose');


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/product',async(req,res)=>{
try {
    const data=new Modelproduct(req.body);
    const savedata=await data.save();
    res.status(201).send(savedata);

} catch (error) {
    res.send(`productt error ${error}`)
}
});
app.get('/product',async(req,res)=>{
    try {
        const data=await Modelproduct.find({})
        res.status(201).send(data);
    
    } catch (error) {
        res.send(`productt error ${error}`)
    }
    });

app.post('/customer',async(req,res)=>{
    try {
        const customerdata=new Modelcustomer(req.body);
        const savedata=await customerdata.save();
        res.status(201).send(savedata);
    
    } catch (error) {
        res.send(`customer error ${error}`)
    }
});

app.post("/order",async(req,res)=>{
    try {
        var productorder=req.body.productorder;
        var customerorder=req.body.customerorder;
        var isactive=req.body.isactive;
 
        const data=new Modelorder({
         _id:mongoose.Types.ObjectId(),
         productorder:productorder,
         
         customerorder:customerorder,
         isactive:isactive
        });
        const createdata=await data.save();
        res.status(201).send(createdata);
    } catch (error) {
        res.status(404).send(`is error ${error}`)
    }
 })

 app.get("/order",async(req,res)=>{
    try {
        //const data=await Modelpassword.find({});
        const data=await Modelorder.find().populate('productorder');
        console.log(data)
        res.status(201).send(data);
    } catch (error) {
        res.status(404).send(`is error ${error}`)
    }
 })


app.listen(port,()=>{
    console.log("port is runninn 3006")
})