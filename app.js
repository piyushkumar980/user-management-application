 const express = require("express");
 const app = express();
 const path = require("path");
 const userModel = require('./models/user');
 
 app.set("view engine", "ejs");
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, "public")));
 

 app.get('/',(req,res)=>{
    res.render("index");
 })

 app.get('/read',async (req,res)=>{
   let Users = await userModel.find()
   res.render("read",{Users});
})

app.get('/edit/:Userid',async (req,res)=>{
   let Users = await userModel.findOne({_id: req.params.Userid})
   res.render("edit",{Users});
})

app.post('/update/:Userid',async (req,res)=>{
   let {image,name,email} = req.body;
   let Users = await userModel.findOneAndUpdate({_id: req.params.Userid},{image,name,email},{new:true});
   res.redirect("/read");
})

app.get('/delete/:id',async (req,res)=>{
   let Users = await userModel.findOneAndDelete({_id: req.params.id})
   res.redirect("/read");
})


app.post('/create', async (req,res)=>{
   const {name,email,image}=req.body;

    let createdUser = await userModel.create({
      name,
      email,
      image
   });
   res.redirect("/read");
})

 app.listen(3000,()=>{
    console.log("server is running");
 });