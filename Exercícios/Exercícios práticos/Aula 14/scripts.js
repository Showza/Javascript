var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')

var n1 = Number(inicio.value)
var n2 = Number(fim.value)
var n3 = Number(passo.value)

function contar(){
    window.alert('Olá')
    res.innerHTML = `${n1}, ${n2}, ${n3}`
}
