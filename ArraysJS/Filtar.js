const nomes = ['Ana','Marcos','Maria','Mauro']
const notas = [7, 4.5, 8, 7.5]

//filter retorna uma lista
//Passa pela array nomes(alunos) e contando o loop no indice e depois a array function testa se
//A array notas na posição do indice é menor que 5, caso seja ele guarda na const reprovados
const reprovados = nomes.filter( (aluno,indice) => notas[indice] < 5 )

console.log(`Reprovados: ${reprovados}`) 