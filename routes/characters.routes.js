import express from "express";
import * as charactersControler from "../controllers/characters.controllers.js";

const route = express.Router()

route.get("/characters", charactersControler.getCharacters);
route.get("/characters/:id", charactersControler.getCharacterById); 

export default route;