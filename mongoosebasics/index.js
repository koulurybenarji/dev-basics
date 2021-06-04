const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieapp',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>
{
    console.log("connection.open");//to make connection mangodb
})
.catch(err=>
{
        console.log(`oh no erroe${err}`);
})
const moviesschema=new mongoose.Schema(
{
    title:String,                        //to build schema for data to be inserted in the mongodb
    year:Number,
    score:Number, 
    rating:String
}
)
const familyschema=new mongoose.Schema(
    {
        name:String,
        age:Number
    }
)
const Family=mongoose.model('Family',familyschema);
const Movie=mongoose.model('Movie',moviesschema); //creating model object for data
Family.insertMany([{name:"benarji",age:20},
                   {name:"siva",age:18},
                   {name:"gangaraju",age:48},
                   {name:"laxmi",age:38} ])
                   .then(data=>
                    {
                       console.log(data);
                       console.log("it worked");
                    })
Movie.insertMany([{title:"thmammudu",year:2000,score:10,rating:"B"},
                 {title:"attarinki daraeydhi",year:2018,score:9,rating:"A"},
                 {title:"gabbar",year:2015,score:10,rating:"A"}])
                 .then(data=>
                    {
                        console.log("it worked");
                        console.log(data);
                    })          