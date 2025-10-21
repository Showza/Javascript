function tabuada(){
    let numero = document.getElementById('txtn')
    let n = Number(numero.value)
    let tabuada = document.getElementById('seltab')

    if (n <= 0){
        window.alert('Erro! O número precisa ser maior ou igual a 1.')
    } else {
        let c = 1
        do{
            let tab = n * c
            tabuada.innerHTML += `${tab}`
            c++
        } while (c < 10)
    }
}