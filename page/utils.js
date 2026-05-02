export function createPage(content) {
    let html = ""
    html += `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Sanrio Characters</title><link rel="stylesheet" href="/styles.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></head><body>`
    html += `<header><nav>
        <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link" href="/characters?section=classic">Clásicos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/characters?section=cute">Cutes</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/characters?section=dark">Dark</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/characters?section=chill">Chill</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/characters?section=adventure">Aventureros</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/characters">Mostrar todos</a>
        </li>
            <form action="/characters" method="get" class="d-flex" role="search">
                <input class="form-control me-2" name="search" type="search" placeholder="Buscar" aria-label="Search"/>
                <button class="btn" type="submit">Buscar</button>
            </form>
        </ul>
    </nav></header>`
    html += content
    html += "<body></html>"
    return html
}

