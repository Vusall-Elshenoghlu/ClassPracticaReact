
const express = require("express");
const mongoose = require("mongoose");
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
app.use(express.json())
app.listen(3000, () =>{
    console.log("server is running on port 3000...");
})

let ProductSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    isSale:Boolean,
    image:String
})

let ProductModel= mongoose.model("products",ProductSchema)

app.get("/", (req,res) => {
    res.send("Hello from Node Api from")
})
app.get("/api/products",async (req,res)=>{

    let myproducts= await ProductModel.find()
    res.send(myproducts)
})
app.get("/api/products/:id",async (req,res)=>{
    let id=req.params.id
    let myproduct= await ProductModel.findById(id)
    res.send({
        message:"Success GetById",
        data:myproduct
    })
})
app.post("/api/products", async (req,res)=>{
    let newProduct= ProductModel(req.body)
   await newProduct.save()
   res.send({
     message:"Success Post",
     data:req.body
   })
})
app.delete("/api/products/:id", async  (req,res)=>{
    let {id}=req.params
   await ProductModel.findByIdAndDelete(id)
   res.send({
    message:"Success Delete",
})
})

mongoose.connect("mongodb+srv://vusalehaf206:vusal206206@learn.ravyg.mongodb.net/")
.then(() => {
    console.log("Connected To database");
})
.catch(() =>{
    console.log("Connection Failed...")
})