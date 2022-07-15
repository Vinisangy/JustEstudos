const alunos = ['João', 'Juliana', 'Caio','Ana']
const media = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, media]

//Aqui estou criando uma função que recebe um parametro de nomeDoAluno
const exibeNomeNota = (nomeDoAluno) => {
    
//Includes é um metodo para procurar dentro da array, procura pelo valor de dado como no caso o nomeDoAluno e retorna sempre como True or False
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
//IndexOf Tras o numero do indice (posição do elemento dentro da array) no caso  a posição de nomeDoAluno 
//Estou guardando essa posição numa variavel pra depois usar como referencia numa array
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', Sua media é ' + listaDeNotasEAlunos[1][indice]
    }else{
        return "Aluno não esta cadastrado"
    }

}

console.log(exibeNomeNota('Ana'))
