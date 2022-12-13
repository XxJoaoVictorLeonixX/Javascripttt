function calcular(){
    var txtv = document.querySelector('#txtvel')
    var res = document.querySelector('#res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de ${vel} Km/h`
    
    if(vel > 60){
        res.innerHTML += 'Você esta <strong>multado</strong> por ecesso de velocidade'
    }
    res.innerHTML += `<p>Dirija sempre com sinto de segurança</p>`
}