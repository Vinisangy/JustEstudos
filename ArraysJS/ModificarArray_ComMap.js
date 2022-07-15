const notas = [10, 9, 8, 7, 6]

//ForEache não retorna nada, ele executa oque esta dentro do bloco
//O Map sim ele retorna um resultado por isso preciso de uma nova Variavel
const notasAtualizadas = notas.map( nota => 
    nota == 10 ? nota : ++nota)
    // O "++" primeiro para que ele soma e depois retorna o valor

console.log(notasAtualizadas)