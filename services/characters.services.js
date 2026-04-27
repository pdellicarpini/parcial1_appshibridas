import {readFile} from "fs/promises";

export function getCharacters(){
    return readFile("./data/characters.json", "utf-8")
    .then(characters => JSON.parse(characters))
    .catch(err => [])
}

export function getCharacterById(id){
    return getCharacters()
    .then(characters => characters.find(character => character.id == id))
}