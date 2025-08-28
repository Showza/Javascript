var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 6){
    console.log(`Está de madrugada.`)
}

else if(hora < 13){
    console.log(`Está de dia.`)
}
else if(hora < 19){
    console.log(`Está de tarde.`)
}

else{
    console.log(`Está de noite.`)
}