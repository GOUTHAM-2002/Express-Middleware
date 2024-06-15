//Not so secure but simple stateless authentication
import express from "express";
import basicAuth from "express-basic-auth"

const app = express();

app.use(
    basicAuth({
        users: { username : "password"},
        challege: true,
        unauthorizedResponse:
        "Unathorized acces. Please provide valiud credentails",

    })
)

app.get("/secure-data",(req,res)=>{
    res.send("This is secure data that requires valid credentials.")
})

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});