const mongoose=require('mongoose');
const productdetails=new mongoose.Schema(
{
 name:
 {
     type:String,
     required:true
 },
 price:
 {
     type:Number,
     required:true,
     lowercase:true
 },
 category:
 {
     type:String,
     enum:['fruits','vegetables','dairy']
 }
})
const Product=mongoose.model('Product',productdetails);
module.exports=Product;