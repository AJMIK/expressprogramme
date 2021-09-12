
var express=require('express')
var bodyParser = require('body-parser')
var app=express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("welcome to  my website")
})
app.post('/',(req,res)=>{

    var getName= req.body.name
    var getRoll= req.body.rollno
    res.json(getName + getRoll)
})

app.post('/read',(req,res)=>{

    var getNum1= parseFloat(req.body.num1)
    var getNum2=parseFloat(req.body.num2)
    var sum= getNum1 + getNum2

    res.json({"result":sum})
})
app.listen(process.env.PORT||3000,()=>{
    console.json("server started at http://localhost:3000/")
})