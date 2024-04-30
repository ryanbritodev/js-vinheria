function showFoods() {
    let harmo = document.querySelector("#harmo")
    let img = document.querySelector("#imagem-vinho")
    let img_description = document.querySelector(".harmo__img")
    let harmo_text;
    let wine_id = document.cookie.split('=')[1]

    if (wine_id == 1) {
        img.src = "/vinheria_agnello/assets/img/first-wine.png"
        harmo_text = `<ul>
        <li>Carnes Vermelhas grelhadas e assadas</li>
        <li>Queijos Fortes</li>
    </ul>`
        img_description.innerHTML += "<h2>Aliara Odfjell</h2>"
    }
    else if (wine_id == 2) {
        img.src = "/vinheria_agnello/assets/img/second-wine.png"
        harmo_text = `<ul>
        <li>Carnes Vermelhas</li>
        <li>Gastronomia Mediterrânea</li>
    </ul>`
        img_description.innerHTML += "<h2>Château Hyot Prestige</h2>"
    }

    harmo.innerHTML += harmo_text
}


document.addEventListener("DOMContentLoaded", showFoods)
