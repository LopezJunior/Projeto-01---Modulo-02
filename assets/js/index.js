let img = document.querySelector('#alterar')
let txt = document.querySelector('#txt')

let texto = [
    "Modo: Humano Normal",
    "Modo: Marca do Demonio Ativada",
    "Modo: Assault Mod Ativado",
    "Modo: Rei demonio Ativado",
    "Modo: Meliodas Sad ;-;"
]

let gif = [
    "./assets/img/meliodas.gif",
    "./assets/img/demon-mark.gif",
    "./assets/img/assalt-mode.gif",
    "./assets/img/rei-demonio.gif",
    "./assets/img/meliodas-sad.gif"
]

function alterar(){
    if(txt.innerText === texto[0]){
        txt.innerText = texto[1]
        img.src = gif[1]
    }else if(txt.innerText === texto[1]){
        txt.innerText = texto[2]
        img.src = gif[2]
    }else if(txt.innerText === texto[2]){
        txt.innerText = texto[3]
        img.src = gif[3] 
    }else if(txt.innerText === texto[3]){
        txt.innerText = texto[4]
        img.src = gif[4]
    }else {
        txt.innerText = texto[0]
        img.src = gif[0]
    }
}






