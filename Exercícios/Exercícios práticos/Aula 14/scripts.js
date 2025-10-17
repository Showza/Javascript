let inicio = document.body.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let res = document.getElementById('res')

let n1 = Number(inicio.value)
let n2 = Number(fim.value)
let n3 = Number(passo.value)

function contar(){
    window.alert('Olá')
    res.innerHTML = `${n1}, ${n2}, ${n3}`
}

