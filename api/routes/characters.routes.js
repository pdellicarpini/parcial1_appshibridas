import express from "express";
import * as controllers from "../controllers/characters.controllers.js";

const router = express.Router();

router.get("/characters", controllers.getCharacters);
router.get("/characters/:id", controllers.getCharacterById);
router.post("/characters", controllers.postCharacter);
router.delete("/characters/:id", controllers.deleteCharacter);
router.patch("/characters/:id", controllers.updateCharacter);
router.put("/characters/:id", controllers.replaceCharacter);

export default router