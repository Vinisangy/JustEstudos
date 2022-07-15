let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']

//O map também percorre a array e dentro do parametro vai uma função com oque queremos que faça
//Aqui no caso estou percorrendo a array e executando uma função para deixar todos os nomes em CapsLock
const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)

//Lembrando que o Map retorna um valor, e o ForEach Apenas executa o bloco de notas