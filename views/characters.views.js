import { createPage } from "../page/utils.js";

export function createCharactersList(characters){
    let html = ""
    html += "<div class='content'>"
    html += "<div class='text-center'>"
    html += "<a href='/characters/add' class='add'>Agregar personaje</a>"
    html += "</div>"
    html += "<div class='character'>"
    html += "<ul>"
    characters.forEach( character => html += "<li class='m-2' >"+ character.name + " " + `<a href="/characters/${character._id}" class="more">Ver más</a>` + `<a href="/characters/update/${character._id}" class="more">Editar</a>` + `<a href="/characters/delete/${character._id}" class="more">Borrar</a>` + "</li>" )
    html += "</ul>" 
    html += "</div>"
    html += "</div>"
    return createPage(html);
}

export function createCharacterPage(character){
    let html = ""
    html += "<div class='content'>"
    html += "<div class='character'>"
    html += "<div class='character_card d-flex flex-column justify-content-center align-items-center'>"
    html += "<h2 class='fw-bold'>" + character.name + "</h2>"
    html += "<p>" + character.description + "</p>"
    html += "<div class='d-flex gap-3'>"
    html += "<p><span class='fw-bold'>Le gusta mucho: </span>" + character.likes + "</p>"
    html += "<p><span class='fw-bold'>Especie: </span>" + character.species + "</p>"
    html += "</div>"
    html += `<a href='${character.link}' class='more mb-2'>Más info</a>`
    html += `<img src="/${character.img}" alt="${character.name}" width="300px">`
    html += "<div class='d-flex gap-2 mt-3'>"
    html += `<a href="/characters/update/${character._id}" class="more">Editar</a>`
    html += `<a href="/characters/delete/${character._id}" class="more">Borrar</a>`
    html += "</div>"
    html += "<div class='text-end back'>"
    html += "<a href='/characters'>Atrás</a>"
    html += "</div>"
    html += "</div>"
    html += "</div>"
    html += "</div>"
    return createPage(html);
}

export function create404(){
    let html = ""
    html += "<h2> 404 page not found</h2>"
    return createPage(html);
}

export function createNewCharacterForm(){
    let html = ""
    html += "<div class='content'>"
    html += "<h2 class=''>Agregar nuevo personaje</h2>"
    html += "<form action='/characters/add' method='post'>"
    html += "<div>"
    html += "<label>Nombre</label>"
    html += "<input class='form-control' type='text' name='name' placeholder='ej: hello kitty'/>"
    html += "</div>"
    html += "<div>"
    html += "<label>Descripción</label>"
    html += "<input class='form-control' type='text' name='description' placeholder='ej: una gatita que le gusta cocinar'/>"
    html += "</div>"
    html += "<div>"
    html += "<label>Sección (classic/cute/dark/chill/adventure)</label>"
    html += "<input class='form-control' type='text' name='section' placeholder='ej: classic'/>"
    html += "</div>"
    html += "<div>"
    html += "<label>Especie</label>"
    html += "<input class='form-control' type='text' name='species' placeholder='ej: gato'/>"
    html += "</div>"
    html += "<div>"
    html += "<label>Algo que le guste mucho</label>"
    html += "<input class='form-control' type='text' name='likes' placeholder='ej: la tarta de manzana'/>"
    html += "</div>"
    html += "<div>"
    html += "<label>Imagen (poner solo el nombre del personaje + extensión de archivo)</label>"
    html += "<input class='form-control' type='text' name='img' placeholder='ej: hellokitty.jpg'/>"
    html += "</div>"
    html += "<div>"
    html += "<label>Link (url completa)</label>"
    html += `<input class='form-control' type='text' name='img' placeholder='https://hellokitty.fandom.com/wiki/Hello_Kitty'/>`
    html += "</div>"
    html += "<div class='text-end'>"
    html += "<input type='submit' value='Agregar' class='add_button'/>"
    html += "</div>"
    html += "</form>"
    html += "<div class='text-end back'>"
    html += "<a href='/characters'>Atrás</a>"
    html += "</div>"
    html += "</div>"
    return createPage(html);
}

export function updateCharacterForm(character) {
    let html = ""
    html += "<div class='content'>"
    html += "<h2 class=''>Agregar nuevo personaje</h2>"
    html += `<form action='/characters/update/${character._id}' method='post'>`
    html += "<div>"
    html += "<label>Nombre</label>"
    html += `<input class='form-control' type='text' name='name' value='${character.name}'/>`
    html += "</div>"
    html += "<div>"
    html += "<label>Descripción</label>"
    html += `<input class='form-control' type='text' name='description' value='${character.description}'/>`
    html += "</div>"
    html += "<div>"
    html += "<label>Sección (classic/cute/dark/chill/adventure)</label>"
    html += `<input class='form-control' type='text' name='section' value='${character.section}'/>`
    html += "</div>"
    html += "<div>"
    html += "<label>Especie</label>"
    html += `<input class='form-control' type='text' name='species' value='${character.species}'/>`
    html += "</div>"
    html += "<div>"
    html += "<label>Algo que le guste mucho</label>"
    html += `<input class='form-control' type='text' name='likes' value='${character.likes}'/>`
    html += "</div>"
    html += "<div>"
    html += "<label>Imagen (poner solo el nombre del personaje + extensión de archivo)</label>"
    html += `<input class='form-control' type='text' name='img' value='${character.img}'/>`
    html += "</div>"
    html += "<div>"
    html += "<label>Link (url completa)</label>"
    html += `<input class='form-control' type='text' name='link' value='${character.link}'/>`
    html += "</div>"
    html += "<div class='text-end'>"
    html += "<input type='submit' value='Guardar' class='add_button'/>"
    html += "</div>"
    html += "</form>"
    html += "<div class='text-end back'>"
    html += "<div class='text-end back'>"
    html += "<a href='/characters'>Atrás</a>"
    html += "</div>"
    html += "</div>"
    html += "</div>"
    return createPage(html)
}

export function deleteCharacter(character) {
    let html = ""
    html += "<div class='content'>"
    html += "<div class='text-center'>"
    html += `<form action='/characters/delete/${character._id}' method='post'>`
    html += "<h2> ¿Seguro que deseas eliminar a " + character.name + " de la Base de Datos?</h2>"
    html += "<input type='submit' value='Borrar' class='add_button'>"
    html += "</form>"
    html += "</div>"
    html += "<div class='text-center back'>"
    html += "<a href='/characters'>Atrás</a>"
    html += "</div>"
    html += "</div>"
    return createPage(html)
}