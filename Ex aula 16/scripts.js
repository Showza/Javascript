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
            //Limpar o resumo para caso o usuário comece a inserir novos números ele apague
            resumo.innerHTML = ''
        } else {
            window.alert('Erro! Valor já foi inserido')
        }
    }
    //Apagando o valor que foi digitado, mesmo que ela seja aceito ou recusado nos testes acima
    numero.value = ''
    //Coloca o foco no input, como se o usuário tivesse clicado
    numero.focus()
}

function finalizar() {
    if (list_num.length <= 1) {
        window.alert('Erro! Insira pelo menos 2 números para finalizar.')
    } else {
        //Ordenando a lista em ordem crescente. Detalhe que é necessário inserir a function e comparar o primeiro número (a) com o segundo número (b)
        list_num.sort(function (a, b) {
            return a - b;
        })

        //Realizando a soma de todos os números, fazendo isso com base no tamanho da lista. Então o FOR faz com que seja somado a "SOMA" + o número da lista começando do index 0
        let soma = 0
        for (let c = 0; c < list_num.length; c++) {
            soma += list_num[c];
        }

        //Média dos valores
        let media = soma / list_num.length
        //Menor número da lista pegando o primeiro número já que a lista foi organizada anteriormente
        let menor_num = list_num[0]
        //Maior valor da lista pegando o último número da lista usando o tamanho dela -1
        let maior_num = list_num[list_num.length - 1]

        //Print dos resultados
        resumo.innerHTML = `Ao todo, temos ${list_num.length} números cadastrados. <br> O maior número informado foi ${maior_num}. <br> O menor número informado foi ${menor_num}. <br> Somando todos os valores, temos ${soma}.<br> A média dos valores digitados é ${media}.`
    }
}

