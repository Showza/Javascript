function tabuada() {
    let numero = document.getElementById('txtn')
    let n = Number(numero.value)
    let tab = document.getElementById('seltab')

    if (numero.value.length == 0) {
        window.alert('Erro! Insira um número')
    } else {
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}