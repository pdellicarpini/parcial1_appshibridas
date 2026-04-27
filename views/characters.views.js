export function createCharactersList(characters){
    let html = ""
    html += "<ul>"
    characters.forEach( character => html += "<li>"+ character.name + `<a href="/characters/${character.id}"> Ver más</a>` +"</li>" )
    html += "</ul>"
    return html
}

export function createCharacterPage(character){
    let html = ""
    html += "<h2>" + character.name + "</h2>"
    html += "<p>" + character.description + "</p>"
    html += "<p>Le gusta mucho: " + character.likes + "</p>"
    html += "<p>Especie: " + character.name + " es un " + character.species + "</p>"
    html += `<img src="..public/${character.img}" alt="${character.name}" width="300px">`
    return html
}

export function create404(){
    let html = ""
    html += "<h2> 404 page not found</h2>"
    return html
}