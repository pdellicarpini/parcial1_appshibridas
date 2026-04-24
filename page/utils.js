export function createPage(content) {
    let html = ""
    html += `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>`
    html += `<header>Hello Kitty y sus amigos</header>`
    html += content
    html += "<body></html>"
    return html
}

export function createCharactersList(characters){
    let html = ""
    html += "<ul>"
    characters.forEach( character => html += "<li>"+ character.name + `<a href="/characters/${character.id}"> Ver más</a>` +"</li>" )
    html += "</ul>"
    return html
}

export default {createPage, createCharactersList}