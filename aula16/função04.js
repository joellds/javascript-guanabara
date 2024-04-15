//Fatorial de um number: 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) { //O contador (c) começa em 5 e vai perdendo 1 (c--) até chegar em 1
        fat *= c
    }
    return fat
}
console.log(fatorial(5))