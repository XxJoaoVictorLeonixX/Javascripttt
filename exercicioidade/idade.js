function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var form = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if(form.value.length == 0 || Number(form.value) > ano){
        alert('verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(form.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gen = 'Homem'
            if(idade >=0 && idade < 10){
                img.src = '../exercicioidade/imagens/bebemenino.jpg'
            }else if(idade < 21){
                img.src = '../exercicioidade/imagens/jovemhomem.jpg'
            }else if(idade < 50){
                img.src = '../exercicioidade/imagens/homemadulto.jpg'
            }else{
                img.src = '../exercicioidade/imagens/idosohomem.jpg'
            }
        }else if(fsex[1].checked){
            gen = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
            }else if(idade < 21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idoso
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }

}