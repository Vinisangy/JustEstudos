const nomes = ['João','Juliana','Ana','Caio','Lara','Aline','Fabiana']

//usando a função a slice para dividir a array passando 2 parametro que é o começo do corte e o fim
//lenght /2 porque eu quero que vai ate a metade da array 
const sala1 = nomes.slice(0,nomes.length/2) 
const sala2 = nomes.slice(nomes.length/2)//quando nao poe o segundo parametro vai ate o final da array

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)