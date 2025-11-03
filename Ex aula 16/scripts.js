let numero = document.getElementById('numero')
let sel_num = document.getElementById('sel_num')
let resumo = document.getElementById('resumo')
let list_num = []


function adicionar() {
    //Validando se foi inserido algum valor no input
    if (numero.value.length == 0) {
        window.alert('Erro! Insira um valor antes de adicionar')
    } else {
        let num = Number(numero.value)
        //Validando se o número inserido está dentro do range determinado
        if (num < 1 || num > 100) {
            window.alert('Erro! Insira um valor entre 1 e 100')
            //Validando se o número digitado já está na lista ou não
        } else if (list_num.indexOf(num) < 0) { 
            //Exibindo o número que foi inserido
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado.`
            sel_num.appendChild(item)
            //Inserindo o valor digitado no array
            list_num.push(num)
        } else {
            window.alert('Erro! Valor já foi inserido')
        }
    }
}

function finalizar(){
    list_num.sort(function(a,b){
        return a - b;
    })
    let soma = 0

    for (let c = 0; c < list_num.length; c++){
        soma += list_num[c];
    }

    let media = soma / list_num.length

    let menor_num = list_num[0]
    let maior_num = list_num[list_num.length -1]

    resumo.innerHTML = `Ao todo, temos ${list_num.length} números cadastrados. <br> O maior número informado foi ${maior_num}. <br> O menor número informado foi ${menor_num}. <br> Somando todos os valores, temos ${soma}.<br> A média dos valores digitados é ${media}.`
}
