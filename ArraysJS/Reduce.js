const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

//Esse Parametro vai ser substituido pelas Salas quando chamadas no console.log
function mediaSala(notasDaSala){ 
    //reduce, reduz todos os valores da array para um unico valor numerico
    //o atual no caso é o valor atual daquela posição 
    //e o acum seria o acumulador que nesse caso foi passado como 0
    const somaDasNotas = notasDaSala.reduce((acum, atual) =>
    atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Media da sala de JavaScript ${mediaSala(salaJS)}`)
console.log(`Media da sala de Java ${mediaSala(salaJava)}`)
console.log(`Media da sala de Python ${mediaSala(salaPython)}`)



//EXEMPLO 2
const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum, atual) => atual + acum, 0) /notas.length

console.log(media)