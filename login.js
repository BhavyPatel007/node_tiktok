const express = require("express");
const conection = require("./config");
const Connection = require('./config')
const app = express();

app.use(express.json());
app.get("/",(req,resp)=>{
    Connection.query(
        "select * from loginuser",(err,result)=>{
            if(err){
                resp.send("error")
            }
            else{
                resp.send(result)
            }
        }
    )
})

app.post("/login",(req,resp)=>{
    const data = req.body
    conection.query(
        "INSERT INTO loginuser SET ?",data,(error,result,fields)=>{
            if(error) error;
            resp.send(result)
        }
    )
})

//set app port
app.listen(4500);