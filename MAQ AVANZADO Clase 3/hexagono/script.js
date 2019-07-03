let lados = 6
let indice = 0
let sig = document.querySelector("#siguiente")
let ant = document.querySelector("#anterior")
let carousel = document.querySelector("#carousel")

sig.addEventListener("click",cambiarLadoAnt)
ant.addEventListener("click",cambiarLadoSig)

function cambiarLadoAnt(){
    indice = indice - 1
    cambiarLado()
}

function cambiarLadoSig(){
    indice = indice + 1
    cambiarLado()
}

function cambiarLado(){
    let deg = indice / lados * -360
    carousel.style.transform = "rotateY("+deg+"deg) translateZ(-264px)"
}


