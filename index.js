var express = require("express");
var fs = require("fs");
app = express();

app.use(express.static("public"));

var header = fs.readFileSync(__dirname+ "/pages/header.html").toString();
var footer = fs.readFileSync(__dirname+"/pages/footer.html").toString();

app.get("/",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/index.html").toString();
    res.end(header + content + footer);
});

app.get("/about",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/about.html").toString();
    res.end(header + content + footer);
});

app.get("/courses",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/courses.html").toString();
    res.end(header + content + footer);
});

app.get("/contact",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/contact.html").toString();
    res.end(header + content + footer);
});

app.get("/coursedetails",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/coursedetails.html").toString();
    res.end(header + content + footer);
});

app.get("/events",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/events.html").toString();
    res.end(header + content + footer);
});

app.get("/pricing",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/pricing.html").toString();
    res.end(header + content + footer);
});

app.get("/trainers",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/trainers.html").toString();
    res.end(header + content + footer);
});

app.listen(8081,()=>{
    console.log("website run on http://localhost:8081/");
});