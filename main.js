import express from "express";
import {createPage, createCharactersList} from "./page/utils.js";
import {readFile} from "fs/promises";

const app = express(); 

app.use("/", express.static("public"));

function getCharacters(){
    return readFile("./data/characters.json", "utf-8")
    .then(characters => JSON.parse(characters))
    .catch(err => [])
}

app.get("/characters", (req, res) => {
    getCharacters()
    .then(characters => res.send(createPage(createCharactersList(characters))))
    .catch(err => res.send("no se pudo leer el archivo"))
});

app.get("/characters/:id", (req, res) => {
    console.log(req.params)
}); 

app.listen(2026, () => console.log("servidor funcionando en http://localhost:2026"));