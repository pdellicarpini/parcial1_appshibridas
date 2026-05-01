import { readFile, writeFile, access, constants } from "fs/promises";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://prisciladellicarpini:admin1234@ac-3wxsqo1-shard-00-00.gpvdczn.mongodb.net:27017,ac-3wxsqo1-shard-00-01.gpvdczn.mongodb.net:27017,ac-3wxsqo1-shard-00-02.gpvdczn.mongodb.net:27017/?ssl=true&replicaSet=atlas-nil429-shard-0&authSource=admin&appName=Characters");
const db = client.db("AH20232CP1");

export async function getCharacters(filter = {}){
    try {
        const filterBy = {}
        if (filter.section) {filterBy.section = filter.section}
        if (filter.search) {filterBy.$text = { $search: filter.search }}
        await client.connect()
        return db.collection("characters").find(filterBy).toArray()
    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
}

export async function getCharacterById(id){
    try {
        await client.connect()
        return db.collection("characters").findOne({_id: new ObjectId(id)})
    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
}

export async function postCharacter(character){
    try {     
        await client.connect()
        const result = db.collection("characters").insertOne(character)
        return {
            ...character,
            _id: result.insertedId
        }
    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
}

export async function deleteCharacter(id) {
    try {
        await client.connect()
        await db.collection("characters").updateOne({_id: new ObjectId(id)}, {$set: {deleted: true}})
        return id
    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
}

export async function editCharacter(character) {
        try {
        await client.connect()
        const {_id, ...data} = character
        await db.collection("characters").updateOne({_id: new ObjectId(character._id)}, {$set: data})
        return character._id
    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
}