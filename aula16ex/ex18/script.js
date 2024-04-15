/*let array = []

function adicionar() {
    let tn1 = document.getElementById('fnum')//puxando o valor do formulário
    let n = Number(tn1.value)//converte a string em Number
    let list = document.getElementById('flista')//lista onte aparecem os valores
    let res = document.getElementById('res')//é a div onde aparece as respostas depois de FINALIZAR       
    if (n === 0 || n > 100) {//Se o NÚMERO ADD for IGUAL a 0 OU MAIOR que 100
        window.alert('Valor inválido ou já encontrado na lista.')
        return;       
    }
    tn1.value = ''//para apagar o valo no formulário e facilitar a digitação
    tn1.focus()

    array.push(n)//add os números no final da lista
    array.sort()//serve para deixar os números em ordem crescente, mas aqui não funciona

    for (let pos of list.options) {//confere se o número add já existe na lista
        if (parseInt(pos.value) === n) {
            window.alert('Valor já adicionado na lista.')
            return;
        }
    }
    let item = document.createElement('option')
    item.value = n;
    item.text = `Valor ${n} adicionado;`
    list.appendChild(item)
    res.innerHTML = ''//apaga o formulário quando add algum número depois de FINALIZAR
    
    
}
function finalizar() {        
    let qtd = array.length
    let maior = Math.max.apply(null, array)
    let menor = Math.min.apply(null, array)
    let soma = 0
    
    if (array === 0) {
        window.alert('Adicione valores antes de Finalizar')
        return;
    }
    if (qtd === 1){
        soma = array[0]
    } else {
        for (let i = 0; i < qtd; i++) {
            soma += array[i]            
        }
    }
    let media = soma / qtd
    
    let resultado = document.createElement('p')
    resultado.innerHTML = `Ao todo, temos ${qtd} números cadastrados.<br>
    O maior valor informado foi ${maior}.<br>
    O menor valor informado foi ${menor}.<br>
    Somando todos os valores, temos ${soma}.<br>
    A média dos valores digitados é ${media}.`
    document.getElementById('res').appendChild(resultado)
    return;

}*/
//SOLUÇÃO GUANABARA
let num = document.querySelector('input#fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''//apaga o formulário quando add algum número depois de FINALIZAR
    } else {
        window.alert(`Valor inválido ou já encontrado na lista`)
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}