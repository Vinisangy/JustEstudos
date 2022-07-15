const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//Para cada nota vamos executar oque esta no parametro que no caso é um função feita com arrow function
// ele pula automaticamente os elementos dentro da array só passar a array dentro do parametro
notas.forEach(nota => {
    somaDasNotas += nota

})

let media = somaDasNotas/notas.length

console.log(media)