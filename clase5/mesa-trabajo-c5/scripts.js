const contenedorBlack = document.querySelector("body");
console.log(contenedorBlack);
const h1Black = document.querySelector("h1");
const itemBlack = document.querySelectorAll(".item");

let cambiarColor = confirm("Queres continuar en modo claro?")

contenedorBlack.classList.toggle("contenedorBlack")
    h1Black.classList.toggle("h1Black")

    for (const item of itemBlack) {
        item.classList.toggle("itemBlack")
    }

if (cambiarColor) {
    contenedorBlack.classList.toggle("contenedorBlack")
    h1Black.classList.toggle("h1Black")

    for (const item of itemBlack) {
        item.classList.toggle("itemBlack")
    }
}