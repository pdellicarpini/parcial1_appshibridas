import express from "express";
import * as charactersController from "../controllers/characters.controllers.js";

const route = express.Router()

route.get("/characters", charactersController.getCharacters);
route.get("/characters/add", charactersController.newCharacterForm);
route.post("/characters/add", charactersController.newCharacterSave);
route.get("/characters/update/:id", charactersController.updateCharacterForm);
route.post("/characters/update/:id", charactersController.updateCharacter);
route.get("/characters/delete/:id", charactersController.deleteCharacterForm);
route.post("/characters/delete/:id", charactersController.deleteCharacter);
route.get("/characters/:id", charactersController.getCharacterById); 

export default route;