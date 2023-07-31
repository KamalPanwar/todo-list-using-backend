import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var todayTaskArr=[]

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/',(req,res)=>{
   todayTaskArr.push (req.body.Task);
   console.log(todayTaskArr);
   res.render('index.ejs',{
    arr:todayTaskArr
   })
   
})

app.listen(port, () => {
  console.log(`server is running on ${port} `);
});
