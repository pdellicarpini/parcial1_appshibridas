import express from "express";
import * as charactersController from "../controllers/characters.controllers.js";

const route = express.Router()

route.get("/characters", charactersController.getCharacters);
route.get("/characters/add", charactersController.newCharacterForm);
route.post("/characters/add", charactersController.newCharacterSave);
route.get("/characters/:id", charactersController.getCharacterById); 

export default route;