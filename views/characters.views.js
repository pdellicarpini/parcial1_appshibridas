import { createPage } from "../page/utils.js";

export function createCharactersList(characters){
    let html = ""
    html += "<a href='/characters/add' >Agregar personaje</a>"
    html += "<ul>"
    characters.forEach( character => html += "<li>"+ character.name + `<a href="/characters/${character._id}"> Ver más</a>` +"</li>" )
    html += "</ul>"
    return createPage(html);
}

export function createCharacterPage(character){
    let html = ""
    html += "<h2>" + character.name + "</h2>"
    html += "<p>" + character.description + "</p>"
    html += "<p>Le gusta mucho: " + character.likes + "</p>"
    html += "<p>Especie: " + character.name + " es un " + character.species + "</p>"
    html += `<img src="..public/${character.img}" alt="${character.name}" width="300px">`
    return createPage(html);
}

export function create404(){
    let html = ""
    html += "<h2> 404 page not found</h2>"
    return createPage(html);
}

export function createNewCharacterForm(){
    let html = ""
    html += "<h2>Agregar nuevo personaje</h2>"
    html += "<form action='/characters/add' method='post'>"
    html += "<div>"
    html += "<label>Nombre</label>"
    html += "<input type='text' name='name' />"
    html += "</div>"
    html += "<div>"
    html += "<label>Descripción</label>"
    html += "<input type='text' name='description' />"
    html += "</div>"
    html += "<div>"
    html += "<label>Especie</label>"
    html += "<input type='text' name='species' />"
    html += "</div>"
    html += "<div>"
    html += "<label>Algo que le guste mucho</label>"
    html += "<input type='text' name='likes' />"
    html += "</div>"
    html += "<input type='submit' value='add' />"
    html += "</form>"
    html += "<a href='/characters' >Volver</a>"
    return createPage(html);
}