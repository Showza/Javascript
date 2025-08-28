var agora = new Date()
var diaSem = agora.getDay()
/*
    Domingo = dia 0
    Segunda = dia 1
    Terça = dia 2
    Quarta = dia 3
    Quinta = dia 4
    Sexta = dia 5
    Sábado = dia 6
*/


switch(diaSem){
    case 0: 
        console.log(`Domingo`)
    break
    case 1:
        console.log(`Segunda`)
    break
    case 2:
        console.log(`Terça`)
    break
    case 3:
        console.log(`Quarta`)
    break
    case 4:
        console.log(`Quinta`)
    break
    case 5:
        console.log(`Sexta`)
    break
    case 6:
        console.log(`Sábado`)
    break
    default:
        console.log(`Dia inválido`)
    break
}

