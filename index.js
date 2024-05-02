const express = require("express")
const app = express();


app.get("/", (req, res) => {
    res.json({
        message : "You are visiting root."
    })
} )

app.get("/login", (req, res) => {
    res.json({
        message : "You are login route."
    })
} )

app.get("/signup", (req, res) => {
    res.json({
        message : "You are signup route."
    })
} )

app.get("/logout", (req, res) => {
    res.json({
        message : "You are successfully logged out."
    })
})



app.listen(8000, () => {
    console.log("App is running at 8000");
})