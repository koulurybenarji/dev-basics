const express =require('express');
const app=express();
const path=require('path');
const reddit=require('./data.json');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>
{
    res.render('home')
})
app.get('/rand',(req,res)=>
{
   const num = Math.floor(Math.random()*100)
    res.render('random',{num})
})
app.get('/cats',(req,res)=>
{
    const cats=['mewom','meee','heyyy'];
    res.render('cat',{cats});
})
app.get('/r/:subreddit',(req,res)=>
{
    const {subreddit}=req.params;
    const data=reddit[subreddit];
    res.render('subreddit',{...data});

})
app.listen(8000,()=>
{
    console.log("listening at port 8000");
})
