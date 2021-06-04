const express=require('express');
const  app=express();
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
const path=require('path');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views',path.join(__dirname,'/views'));
const {v4:uuid}=require('uuid');
app.get('/comments',(req,res)=>
{
    res.render('comments/index',{comments});
})
app.get('/comments/new',(req,res)=>
{
  res.render('comments/new');
})
app.get('/comments/:id',(req,res)=>
{
  const { id }=req.params;
  const comment =comments.find(c=>c.id===id);
  res.render('comments/show',{comment});
})
app.post('/comments/new',(req,res)=>
{

  const {username,comment}=req.body;
  comments.push({ username ,comment,id:uuid() });
  res.redirect('/comments');

})
app.listen(3000,()=>
{
   console.log("listening on 3000 port");
}
)
const comments=[
    {
        id:uuid(),
        username:'benarji',
        comment:'u can do it'
    },
    {
        id:uuid(),
       username:'siva',
       comment:'siva can do it'
   },
   ];