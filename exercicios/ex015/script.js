function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Preencha os dados novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-crianca-homem.png')
            }else if(idade >= 10 && idade < 50){
                img.setAttribute('src', 'imagem-homem-adulto.jpg')
            }else {
                img.setAttribute('src', 'imagem-homem-velho.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagem-mulher-crianca.jpg')
            }else if(idade >= 10 && idade < 50){
                img.setAttribute('src', 'imagem-mulher-adulto.jpg')
            }else {
                img.setAttribute('src', 'imagem-mulher-idosa.png')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.borderRadius = '120px'
        img.style.padding = '10px' 
        img.style.width = '250px'  
        img.style.height = '250px' 
    }
}




