const express =require('express');
const app=express()
// app.use((req,res)=>
// {
//     console.log("we got a requst");
//     res.send(`<h1>hello</h1>`);

// })
app.get('/search',(req,res)=>
{
    const {q}=req.query; 
    res.send(`hi u querred ${q}`);
}   
)
app.get('/cats2',(req,res)=>
{
    console.log("we got cat request");
    res.send("hey cat here");
})
app.get('/dogs',(req,res)=>
{
    console.log("we got dog request");
    res.send("hey dog here");
})

app.listen('8000',()=>
{
    console.log("listening on port 8000");
})