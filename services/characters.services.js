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

export async function saveNewCharacter(character){
    try {     
        const characters = await getCharacters()
        character.id = characters.length + 1
        characters.push(character)
        await access(file, constants.F_OK)
        await writeFile(file, JSON.stringify(characters, null, 2))
        return character
    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
}