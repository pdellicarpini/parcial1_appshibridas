import * as charactersService from "../services/characters.services.js";
import * as charactersView from "../views/characters.views.js";

export function getCharacters (req, res) {
    charactersService.getCharacters()
    .then(characters => res.send(charactersView.createCharactersList(characters)))
    .catch(err => res.send("no se pudo leer el archivo"))
}

export function getCharacterById (req, res) {
    const id = req.params.id
    charactersService.getCharacterById(id)
    .then(character => res.send(charactersView.createCharacterPage(character)))
    .catch(err => res.send(createPage(charactersView.create404())))
} 


export function newCharacterForm (req, res) {
    res.send(charactersView.createNewCharacterForm())
}

export function newCharacterSave (req, res) {
    const character = req.body;
    console.log(character);
    charactersService.saveNewCharacter(character)
    .then(characterSaved => res.send(charactersView.createCharacterPage(characterSaved)))
    .catch(err => {
        console.error(err)
        res.send("No se pudo guardar el nuevo personaje.")
    })
}