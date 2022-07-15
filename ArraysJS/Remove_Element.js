const notas = [10, 7, 8, 5, 10]

//remove o ultimo element da array (não aceita parametro)
notas.pop()
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length
console.log(`A media é ${media}`)