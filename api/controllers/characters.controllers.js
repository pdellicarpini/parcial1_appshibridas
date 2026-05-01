import * as service from "../../services/characters.services.js";

export function getCharacters(req, res){
    const filter = {}
    if (req.query.search) {filter.search = req.query.search}
    if (req.query.section) {filter.section = req.query.section}
    return service.getCharacters(filter)
        .then(characters => res.status(200).json(characters))
        .catch(err => res.status(500).json({msg: "No fue posible obtener los personajes, intente nuevamente más tarde."}))
}

export function getCharacterById(req, res){
    const id = req.params.id
    return service.getCharacterById(id)
        .then(character => {
            if(character) { 
                res.status(200).json(character)
            } else {
                res.status(404).json({msg: "El personaje solicitado no existe."})
            }
        })
        .catch(err => res.status(500).json({msg: "No fue posible obtener el personaje deseado, intente nuevamente más tarde."}))
}

export function postCharacter(req, res){
    const character = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        species: req.body.species,
        likes: req.body.likes,
        img: req.body.img,
        link: req.body.link
    }
    service.postCharacter(character)
        .then(character => res.status(201).json(character))
        .catch(err => res.status(500).json({msg: "No fue posible crear el nuevo personaje, intente nuevamente más tarde."}))
}

export function deleteCharacter(req, res){
    const id = req.params.id
    service.deleteCharacter(id)
        .then(character => {
            if(Object.keys(character).length !== 0){
                res.status(202).json(character)
            } else {
                res.status(404).json({msg: "El personaje solicitado no existe."})
            }
        })
        .catch(err => res.status(500).json({msg: "No fue posible borrar el personaje, intente nuevamente más tarde."}))
}

export async function updateCharacter(req, res){
    const id = req.params.id
    const uneditedCharacter = await service.getCharacterById(id)
    
    if (!uneditedCharacter) {
        return res.status(404).json({ msg: "El personaje solicitado no existe." })
    }
    const character = {
        _id: id,
        name: req.body?.name ? req.body?.name : uneditedCharacter.name,
        description: req.body?.description ? req.body?.description : uneditedCharacter.description,
        section: req.body?.section ? req.body?.section : uneditedCharacter.section,
        species: req.body?.species ? req.body?.species : uneditedCharacter.species,
        likes: req.body?.likes ? req.body?.likes : uneditedCharacter.likes,
        img: req.body?.img ? req.body?.img : uneditedCharacter.img,
        link: req.body?.link ? req.body?.link : uneditedCharacter.link
    }
    service.editCharacter(character)
        .then(character => {
            if(Object.keys(character).length !== 0){
                res.status(202).json(character)
                return
            } else {
                res.status(404).json({msg: "El personaje solicitado no existe."})
            }
        })
        .catch(err => res.status(500).json({msg: "No fue posible reeemplazar el personaje, intente nuevamente más tarde."}))
}

export function replaceCharacter(req, res){
    const id = req.params.id
    const character = {
        _id: id,
        name: req.body?.name,
        description: req.body?.description,
        section: req.body?.section,
        species: req.body?.species,
        likes: req.body?.likes,
        img: req.body?.img,
        link: req.body?.link
    }
    service.editCharacter(character)
        .then(character => {
            if(Object.keys(character).length !== 0){
                res.status(202).json(character)
                return
            } else {
                res.status(404).json({msg: "El personaje solicitado no existe."})
            }
        })
        .catch(err => res.status(500).json({msg: "No fue posible reeemplazar el personaje, intente nuevamente más tarde."}))
}