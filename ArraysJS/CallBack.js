const nome = ['Ana', 'Ju', 'Leo','Paula']

//Funções callback so funciona se você passar dentro do parametro uma function
nome.forEach(ImprimiNomes) //Percorrendo a Array nome e executando a função que esta no Parametro
//Da pra colocar um segundo parametro no forEach que vai funcionar como o "I"


function ImprimiNomes(nome){
    console.log(nome)
}