const express =require('express');
const cors=require("cors");
const PORT =process.env.PORT || 4000;

const app= express();
app.use(cors());
const iplApi=require("../ipl.json");
app.get("/",async(req,res)=>{
  res.send(iplApi);
})
app.listen(PORT,()=>{
    console.log(`connection ${PORT} successfully...`)
})