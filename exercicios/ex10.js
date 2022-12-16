function contar(){
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let pass = document.querySelector('#txtp')
    let res = document.querySelector('.res')


    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        alert('[ERRO], Faltam dados!' )
    }else{
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if(i < f){
            for(let c = i; c <= f; c+=p)
            res.innerHTML += `${c}`
        }else{
            for(let c = i; c >= f; c-=p){
                res.innerHTML = `${c}`
            }
        }
        
    }
}