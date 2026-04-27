import express from "express";
import charactersRoute from "./routes/characters.routes.js";
const app = express(); 

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));

app.use(charactersRoute);

app.listen(2026, () => console.log("servidor funcionando en http://localhost:2026"));