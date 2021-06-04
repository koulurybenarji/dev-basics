const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/new', {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>
{
    console.log("connection sucess")
})
.catch(err=>
{
 console.log(`oh no error  ${err}`);
}
)
const motorSchema=new mongoose.Schema
(
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
        min:0
    },
    categories:
    {
        type:[String]
    },
    size:
    {
        type:String,
        enum:['X','XL','XXL']

    }
}
)
const motor =mongoose.model('motor',motorSchema);
motor.insert({name:"ben"},{price:10},{categories:['ben','siva']},{size:'Xl'})
.then(data=>
    {
        console.log("hey worked");
        console.log(data);
    })
    .catch(err=>
        {
            console.log("sorry");
            console.log(err);
        })