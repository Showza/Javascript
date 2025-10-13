function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Erro! Verifique o ano de nascimento inserido e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'imgs/criancah.jpg')
            } else if (idade > 10 && idade <= 21){
                //Jovem
                img.setAttribute('src', 'imgs/jovemh.jpg')
            } else if(idade > 21 && idade <= 50){
                //Adulto
                img.setAttribute('src', 'imgs/adultoh.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'imgs/velho.jpg')
            }
        } else{
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'imgs/criancam.jpg')
            } else if (idade > 10 && idade <= 21){
                //Jovem
                img.setAttribute('src', 'imgs/jovemm.jpg')
            } else if(idade > 21 && idade <= 50){
                //Adulto
                img.setAttribute('src', 'imgs/adultom.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'imgs/velha.jpg')
            }
        }
        
        res.innerHTML = `Você é um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}