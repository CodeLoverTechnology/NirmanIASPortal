
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');



const PORT=4200;
const app =express();

app.use(bodyParser.json());

app.use(cors);

app.get('/',function(req,res){
    res.send("Hello From Server, Port : 4200");
})

app.post('/EnquiryInfo',function(req,res){
console.log(req.body);
res.status(200).send({"message":"Data Received"});
})

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','http://nias.codelovertechnology.com');
    res.header('Access-Control-Allow-Headers','Origin,x-Requested-with,Content-Type,Accept,Authorization');
    if(req.method=='OPTIONS')
    {
        res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,PATCH');
        return res.status(200).json({});
    }
    next();
})

app.listen(PORT,function(){
    console.log("Server Running on  Localhost : "+ PORT);
})