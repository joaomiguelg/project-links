

function addClass (){
    let root = document.documentElement

    if (root.classList = none) {
        root.addClass("light")
    } else (root.classList = none)
    
}

function toggleMode() {
    const html = document.documentElement

    html.classList.toggle("light")

    const img = document.querySelector("#perfil-image")

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/Ellipse.png")

    } else {
        img.setAttribute("src", "./assets/Ellipse-dark.png")
    }
    

    
}
