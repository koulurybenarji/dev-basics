const Product=require('./models/product');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmstand',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>
{
    console.log("mongo connection open u can go further");
})
.catch(err=>
{
   console.log(`Mnogo connection error  ${err}`);
})
 Product.insertMany([{name:'banana',price:10,category:'fruits'},
                     {name:'pineapple',price:30,category:'fruits'},
                     {name:'tamato',price:40,category:'vegetables'},
                     {name:'poatato',price:15,category:'vegetables'},
                     {name:'cucumber',price:55,category:'vegetables'}
])
.then(p=>
    {
        console.log(p);
    })
.catch(err=>
{
 console.log(`hey error${err}`);
})