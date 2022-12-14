function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#manha')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >=0 && hora < 12){
        img.src = '../imagens/manha.jpg'
        document.body.style.backgroundColor ='orange'
    }else if(hora >= 12 && hora < 18){
        img.src = '../imagens/tarde.jpg'
        document.body.style.backgroundColor ='#698FF5'
    }else{
        img.src = '../imagens/noite.jpg'
        document.body.style.backgroundColor ='#C357D4'
    }
}