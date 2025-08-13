//DOM

const x = document.querySelector('#x')
const btneymar = document.querySelector('#btneymar')
const btosvaldo = document.querySelector('#btosvaldo')
const btmatheusinho = document.querySelector('#btmatheusinho')

//eventos
btneymar.addEventListener('click',neymar)
btosvaldo.addEventListener('click',osvaldo)
btmatheusinho.addEventListener('click',matheusinho)

//funções

function neymar(){
    x.src = 'images/Neymar.webp'
}
function osvaldo(){
    x.src = 'images/Osvaldo.jpg'
}
function matheusinho(){
    x.src = 'images/matheusinho.jpg'
}
