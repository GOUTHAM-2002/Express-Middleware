// An app that deals with simple logging in and error handling
import express from "express";

const app =express();

const logrequest = (req,res,next)=>{
    console.log(`${req.method} and ${req.url}`)
    next();
}

const handleError = (err,req,res,next)=>{
    console.error(err.message);
    res.status(500).send("Internal Server error");


}

app.use(logrequest);

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/error",(req,res)=>{
    throw new Error("Something went wrong")
})

app.use(handleError);

const port = 3000;

app.listen(port,()=> console.log("Server listening on port 3000......"))