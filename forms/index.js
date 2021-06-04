const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
const path=require('path');
app.use(express.json());
app.set('views',path.join(__dirname,'/views'));
app.post('/hey',(req,res)=>
{
    const {username,item}=req.body;
    res.send(`ur name is ${username} and ur number is ${item}`);
  
})
app.get('/',(req,res)=>
{
  res.send('heyy');
})
app.listen(8000,()=>
{
  console.log("listening");
})