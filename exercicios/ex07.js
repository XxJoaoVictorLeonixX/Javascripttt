function somar(){
    var tn1 = document.querySelector('#num1')
    var tn2 = document.querySelector('#num2')
    var res = document.querySelector('#res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} + ${n2} é igual a ${s}`
}
