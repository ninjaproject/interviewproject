const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/interview_task',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true,
    
}).then(()=>{
    console.log("connect")
}).catch(()=>{
    console.log("not connect");
})