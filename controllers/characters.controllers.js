import { createPage } from "../page/utils.js";
import * as charactersService from "../services/characters.services.js";
import * as charactersView from "../views/characters.views.js";

export function getCharacters (req, res) {
    charactersService.getCharacters()
    .then(characters => res.send(createPage(charactersView.createCharactersList(characters))))
    .catch(err => res.send("no se pudo leer el archivo"))
}

export function getCharacterById (req, res) {
    const id = req.params.id
    charactersService.getCharacterById(id)
    .then(character => res.send(createPage(charactersView.createCharacterPage(character))))
    .catch(err => res.send(createPage(charactersView.create404())))
} 