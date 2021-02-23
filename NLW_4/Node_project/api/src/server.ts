import express from "express"

const app = express()

app.get("/", (req,res) => res.json({message: "Hey JSON is working!"}))

app.post("/", (req,res) => res.json({message: "The data was successfully saved"}))

app.listen(3333, () => console.log("Listening port 3333"))