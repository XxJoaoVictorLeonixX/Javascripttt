function verificar(){
    var txtp = document.querySelector('#txtpais')
    var res = document.querySelector('#res')
    var pais = (txtp.value)
    
    if(pais == 'Brasil'){
        res.innerHTML = 'Brasileiro'
    }else{
        res.innerHTML = 'Estrangeiro'
    }

}