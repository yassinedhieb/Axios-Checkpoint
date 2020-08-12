const express = require("express");
const mongoose= require("mongoose");
const mongodb=require("mongodb");
const axios=require("axios");
const app=express();
const bodyparse=require("body-parser");

// app.use(bodyparser())
// mongoose.connect("mongodb://localhost:27017/projet2",{ useNewUrlParser: true, useUnifiedTopology: true }
// ,(er)=>{if (er){console.log(er)}
//     else{console.log("db connected")}});
app.get('/',(req,res)=>{
    // const fetchData= async() =>{
     const requestone= axios.get("http://api.openweathermap.org/data/2.5/weather?q=Tunisia&appid=65972c6f197475e9e30d69893176f3aa")
     axios
     .all([requestone])
     .then(axios.spread((firstResponse) => {
         res.send(firstResponse.data);
      })
    )
    .catch(er=>console.log(er))
})




app.listen(3000,er=>{if(er)console.log(er) 
    else console.log('server is connected on port 3000')}) ;