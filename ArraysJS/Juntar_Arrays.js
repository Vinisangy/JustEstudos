const salaDePython = ['Melissa','Helena','Rodrigo']

const salaDeJavaScript = ['Ju','Leo','Raquel']


//usando o metodo concat passando no parametro qual array eu quero juntar
//o metodo não atualiza o array atual ele precisa incluir em uma nova const
const salasUnificadas = salaDePython.concat(salaDeJavaScript)

console.log(salasUnificadas)