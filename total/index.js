const express=require('express');
const app=express();
const path=require("path");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
const mongoose=require('mongoose');
app.use(express.urlencoded({extended:true}));
const Product = require('./models/product');
mongoose.connect('mongodb://localhost:27017/farmstand',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>
{
    console.log("mongo connection open u can go further");
})
.catch(err=>
{
   console.log(`Mnogo connection error  ${err}`);
})
const methodoveride=require('method-override');
app.use(methodoveride('_method'));
app.put('/products/:id',async (req,res) =>
{
    const {id}=req.body;
    const product=await Product.findOneAndUpdate(id,req.body,{runValidators:true});
   res.redirect(`/products/${product._id}`)
})
app.delete('/products/:id',async (req,res)=>
{
   const {id}=req.params;
   const deletedproduct=await Product.findByIdAndDelete(id);
    res.render('productpage/delete',{deletedproduct});
})
app.get('/products',async (req,res) =>
{
   const products =await Product.find({})
   res.render('productpage/index',{products});
})
app.get('/products/new',(req,res)=>
{
   res.render('productpage/new');
})
app.get('/products/:id/edit',async(req,res)=>
{
    const {id}=req.params;
    const product=await Product.findById(id);
    res.render('productpage/edit',{product});
})
app.post('/products',async (req,res)=>
{
  const newproduct=new Product(req.body);
  await newproduct.save();
  res.redirect(`/products/${newproduct._id}`)
  
})
app.get('/products/:id',async (req,res) =>
{
   const {id}=req.params;
   const product=await Product.findById(id);
   res.render('productpage/show',{product});
})
app.listen(3000,()=>
{
    console.log("app is listening on port 3000");
})