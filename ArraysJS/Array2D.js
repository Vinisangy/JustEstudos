const alunos = ['João', 'Juliana', 'Caio','Ana']
const media = [10, 7, 9, 6]

//Aqui eu crio uma array que contem outras arrays dentro ou seja uma array com 2 dimensões
//No caso a array alunos virou element 0 e media o element 1
const listaDeNotasEAlunos = [alunos, media]


//aqui primeiro estou selecionando a primeira array(alunos) e depois o primeiro elemento dessa array alunos
//O mesmo em seguida porem selecionando a segunda array(media) e depois o primeiro element dessa array
console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)



//Basicamente estou guardando 2 array dentro de uma array, mas pode ser feito assim também. ex:
//const listaDeNotasEAlunos = [['João', 'Juliana', 'Caio','Ana'],[10, 7, 9, 6]]



// ----------------- OUTRO EXEMPLO -----------------

// idades = [30, 35, 28]
// nomes = ["Ana", "Juliana", "Leonardo"]
// faculdade = [false, true, true]

// funcionarios = [nomes,idades,faculdade]

//O array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, 
//e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”.
//O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado, ex:
// 0 -> nomes
// 1 -> idades
// 2 -> faculdade
