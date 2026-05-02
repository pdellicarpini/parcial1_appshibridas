import * as charactersService from "../services/characters.services.js";
import * as charactersView from "../views/characters.views.js";

export function getCharacters (req, res) {
    const filter = {}
    if(req.query.section){filter.section = req.query.section}
    if(req.query.search) {filter.search = req.query.search}

    charactersService.getCharacters(filter)
    .then(characters => res.send(charactersView.createCharactersList(characters)))
    .catch(err => res.send("no se pudo leer el archivo"))
}

export function getCharacterById (req, res) {
    const id = req.params.id
    charactersService.getCharacterById(id)
    .then(character => res.send(charactersView.createCharacterPage(character)))
    .catch(err => res.send(charactersView.create404()))
} 


export function newCharacterForm (req, res) {
    res.send(charactersView.createNewCharacterForm())
}

export function newCharacterSave (req, res) {
    const character = req.body;
    console.log(character);
    charactersService.postCharacter(character)
    .then(characterSaved => res.send(charactersView.createCharacterPage(characterSaved)))
    .catch(err => {
        console.error(err)
        res.send("No se pudo guardar el nuevo personaje.")
    })
}

export function updateCharacterForm(req, res) {
    const id = req.params.id
    charactersService.getCharacterById(id)
        .then(character => res.send(charactersView.updateCharacterForm(character)))
        .catch((err) => {
            console.error(err) 
            res.send("No se pudo editar el personaje seleccionado, intente nuevamente más tarde..")})
}

export function updateCharacter(req, res) {
    const character = {
        _id: req.params.id,
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        species: req.body.species,
        likes: req.body.likes,
        img: req.body.img,
        link: req.body.link
    }
    charactersService.updateCharacter(character)
        .then( characterUpdated => res.send(charactersView.createCharacterPage(characterUpdated)) )
        .catch( err => {
            console.error(err) 
            res.send("No se pudo editar el personaje loco, intente nuevamente más tarde.")})
}

export function deleteCharacterForm(req, res){
    const id = req.params.id
    charactersService.getCharacterById(id)
        .then(character => res.send(charactersView.deleteCharacter(character)))
        .catch((err) => res.send("No se pudo eliminar el personaje, intente nuevamente más tarde."))
}

export function deleteCharacter(req, res){
    const id = req.params.id
    charactersService.deleteCharacter( id )
        .then(character => res.redirect("/characters"))
        .catch( err => res.send("No se pudo eliminar el personaje, intente nuevamente más tarde.") )
}