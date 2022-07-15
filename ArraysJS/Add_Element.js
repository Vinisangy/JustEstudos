const notas = [10, 6, 8];

//push inclui na ultima posição da array 
// precisa colocar um param, caso nao coloque ele adiciona um undefined no final da array
notas.push(7); //Aqui esta incluindo o numero 7 na array
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length

console.log(media)