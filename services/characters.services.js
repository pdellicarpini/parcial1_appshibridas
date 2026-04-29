import { readFile, writeFile, access, constants } from "fs/promises";

const file = "./data/characters.json";

export function getCharacters(){
    return readFile(file, "utf-8")
    .then(characters => JSON.parse(characters))
    .catch(err => [])
}

export function getCharacterById(id){
    return getCharacters()
    .then(characters => characters.find(character => character.id == id))
}

export async function postCharacter(character){
    try {     
        const characters = await getCharacters()
        character.id = characters.length + 1
        characters.push(character)
        await access(file, constants.F_OK)
        await writeFile(file, JSON.stringify(characters ))
        return character
    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
}

export async function deleteCharacter(id) {
    try {
        const characters = await getCharacters()
        let characterDeleted = {}

        characters.forEach((character) => {
            if (character.id == id) {
                characterDeleted = character
                character.deleted = true
            }
        })
        await access(file, constants.F_OK)
        await writeFile(file, JSON.stringify(characters))
        return characterDeleted
    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
}

export async function editCharacter(character) {
    try {
        const characters = await getCharacters()
        let characterEdited = {}
        characters.forEach(newEdit => {
            if (newEdit.id == character.id) {
                newEdit.name = character.name
                newEdit.description = character.description
                newEdit.section = character.section
                newEdit.species = character.species
                newEdit.likes = character.likes
                newEdit.img = character.img
                newEdit.link = character.link

                characterEdited = newEdit
            }
        });
        await access(file, constants.F_OK)
        await writeFile(file, JSON.stringify(characters))
        return characterEdited
    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
}